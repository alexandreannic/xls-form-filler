import jsep, {BinaryExpression, CallExpression, Expression, Identifier, Literal, UnaryExpression} from 'jsep'
import {Kobo} from 'kobo-sdk'
import {Path} from '../path/Path.ts'
import {functions} from './functions.ts'
import {isValidDateString} from '../../utils/helpers.ts'
import {duration} from '@axanc/ts-utils'

export namespace AstError {
  export class Base extends Error {
  }

  export class UndefinedParentIndex extends Base {
  }

  export class InvalidInteger extends Base {
  }

  export class FunctionNotImplemented extends Base {
    constructor(fnName: string) {
      super(fnName)
    }
  }
}


const dateTypes: Set<Kobo.Form.QuestionType> = new Set([
  'date',
  'datetime',
  'today',
  'start',
  'end',
])

export interface EvalEnvironment {
  values: Record<string, any>
  thatName: string
  path?: Path
  questionsMap: Record<string, Kobo.Form.Question>
}

export const is = {
  binary: (expr: Expression): expr is BinaryExpression => expr.type === 'BinaryExpression',
  call: (expr: Expression): expr is CallExpression => expr.type === 'CallExpression',
  identifier: (expr: Expression): expr is Identifier => expr.type === 'Identifier',
  literal: (expr: Expression): expr is Literal => expr.type === 'Literal',
  unary: (expr: Expression): expr is UnaryExpression => expr.type === 'UnaryExpression',
}

export class AstFormEvaluator {
  constructor(private env: EvalEnvironment) {
  }

  private preprocessedFormula = (formula: Kobo.Form.Formula) => {
    let parsed = formula
      .replace(/position\(\.\.\)/g, () => {
        const index = this.env.path?.last?.index
        if (index === undefined) throw new AstError.UndefinedParentIndex()
        return (index + 1) + ''
      })
      .replace(/(?<=^|[^\w])\.(?=$|[^\w])/g, this.env.thatName) // replace . → thatName
      .replace(/\bnot\(/g, '!(')
      .replace(/([^<>!])=/g, '$1==')
      .replace(/\bdiv\b/g, '/')
      .replace(/\bmod\b/g, '%')
      .replace(/\band\b/g, '&&')
      .replace(/\bor\b/g, '||')
      .replace(/[‘’]/g, '\'')
      .replace(/\$\{([^}]+)}/g, (_, name) => name) // replace ${foo} → foo
    Object.entries(functions).forEach(([functionName, prototype]) => {
      parsed = parsed.replace(new RegExp(`${prototype.localName}`, 'g'), functionName)
    })
    return parsed
  }

  public eval(formula?: string): any {
    if (!formula || formula === '') return

    const cleanFormula = this.preprocessedFormula(formula)
    try {
      const ast = jsep(cleanFormula)
      return this.evaluate(ast)
      // console.log(formula, '➡️', cleanFormula, '➡️', result)
    } catch (e: any) {
      console.error('Eval error:', cleanFormula, e.message)
      return
    }
  }

  private isTypeDate = (questionName: string) => dateTypes.has(this.env.questionsMap[questionName].type)

  private evaluate = (node: Expression, context?: {inFunction?: string}): any => {
    if (is.literal(node)) {
      return node.value
    }
    if (is.identifier(node)) {
      return this.resolveVar(node.name, context)
    }
    if (is.binary(node)) {
      return this.applyBinary(node.operator, this.evaluate(node.left), this.evaluate(node.right))
    }
    if (is.unary(node)) {
      return this.applyUnary(node.operator, this.evaluate(node.argument))
    }
    if (is.call(node)) {
      const fnName = node.callee.name as string
      const args = node.arguments.map(_ => this.evaluate(_, {inFunction: fnName}))
      return this.callFunction(fnName, args)
    }
    throw new Error(`Unknown node type: ${node.type}`)
  }

  private resolveVar = (name: string, context?: {inFunction?: string}): any => {
    // if (name === '.') name = this.env.thatName
    // console.log('resolveVar', this.env.values, name)
    const fnResolvingDeeply: (keyof typeof functions)[] = [
      'sum',
    ]
    const resolveDeeply = fnResolvingDeeply.includes(context?.inFunction as any)
    if (resolveDeeply)
      return this.env.path?.collectDeeply(this.env.values, name)
    return this.env.path?.searchInBranch(this.env.values, name)
    // if (name === '.') return this.parseValue(this.env.thatName)
    // if (this.env.currentScope?.[name] !== undefined) return this.env.currentScope[name]
    // if (this.env.values?.[name] !== undefined) return this.env.values[name]
    //
    // return undefined
  }

  // private parseValue(name?: string): any {
  //   if (!name) return undefined
  //   return this.env.values?.[name]
  // }

  private applyBinary = (op: string, left: any, right: any): any => {
    if (isValidDateString(left)) left = duration(+new Date(left)).toDays
    if (isValidDateString(right)) right = duration(+new Date(right)).toDays
    switch (op) {
      case '+':
        return +left + +right
      case '-': {
        return left - right
      }
      case '*':
        return left * right
      case '/':
        return left / right
      case '%':
        return left % right
      case '==':
        return left == right
      case '===':
        return left === right
      case '!=':
        return left != right
      case '!==':
        return left !== right
      case '>':
        return left > right
      case '<':
        return left < right
      case '>=':
        return left >= right
      case '<=':
        return left <= right
      case '&&':
        return left && right
      case '||':
        return left || right
      default:
        throw new Error(`Unsupported operator: ${op}`)
    }
  }

  private applyUnary = (op: string, arg: any): any => {
    switch (op) {
      case '+':
        return +arg
      case '-':
        return -arg
      case '!':
        return !arg
      default:
        throw new Error(`Unsupported unary operator: ${op}`)
    }
  }

  private callFunction = (name: string, args: any[]): any => {
    const fn = functions[name as keyof typeof functions]
    if (!fn) {
      throw new AstError.FunctionNotImplemented(name)
    }
    return fn.call(this.env, args)
    // switch (name) {
    //   case 'regex':
    //     return new RegExp(args[1]).test(args[0])
    //   case 'selected':
    //     return args[0] === args[1] // TODO handle select_multiple
    //   case 'if':
    //     return args[0] ? args[1] : args[2]
    //   case 'sum':
    //     return Array.isArray(args[0]) ? args[0].reduce((a, b) => a + (+b || 0), 0) : 0
    //   case 'countSelected':
    //     return Array.isArray(args[0]) ? args[0].length : 0
    //   case 'indexedRepeat':
    //     return this.indexedRepeat(args[0], args[1], args[2])
    //   case 'position':
    //     return this.env.path?.last?.index !== undefined ? this.env.path.last.index + 1 : undefined
    //   default:
    //     throw new Error(`Unknown function: ${name}`)
    // }
  }

  private indexedRepeat(field: string, group: string, index: number): any {
    return this.env.values?.[group]?.[index - 1]?.[field]
  }
}
