import {Kobo} from 'kobo-sdk'
import {Path} from './Path.ts'
import {FormValues} from './Path.ts'
import get from 'lodash.get'

const today = () => new Date().toISOString().substring(0, 10)

const selected = (value: string, match: string): boolean => {
  return value?.split(/\s+/).includes(match)
}

const regex = (value: string, pattern: string) => new RegExp(pattern).test(value)

const countSelected = (value: string) => {
  return value?.split(' ').length ?? 0
}

export class XFormEngine {
  constructor(private props: {
    questionsMap: Record<string, Kobo.Form.Question>
    thatName?: any
    values: FormValues,
    path: Path
  }) {
  }

  private readonly parseValue = ({
    name
  }: {
    name: string,
  }): any => {
    if (!name) {
      console.error('Nothing to parse?')
      return 'undefined'
    }
    if (!this.props.questionsMap[name]) {
      console.error(`Missing question ${name} in this form`)
      return 'undefined'
    }
    const value = this.props.path.searchValueDeeply(this.props.values, name)
    if (value) {
      const type = this.props.questionsMap[name].type
      switch (type) {
        case 'decimal':
        case 'integer': {
          return isNaN(value) || value === '' ? undefined : `${value}`
        }
        default:
          return `'${value}'`
      }
    }
  }

  readonly eval = (formula?: Kobo.Form.Formula) => {
    if (!formula || formula === '') return

    const indexedRepeat = (name: string, groupName: string, index: number) => {
      return get(this.props.values, [groupName, index - 1, name])
    }

    const processed = formula
      .replace(/sum/, '')
      .replace(/([^\w])div([^\w])/g, (_, start, end) => `${start}/${end}`)
      .replace(/indexed-repeat\(\$\{(.*?)}\s*,\s*\$\{(.*?)}\s*(.*)?\)/g, (_, field, groupName, rest) => `indexedRepeat('${field}', '${groupName}'${rest})`)
      .replace(/count-selected/g, 'countSelected')
      .replace('position(..)', this.props.path.last?.index !== undefined ? '' + (this.props.path.last.index + 1) : 'undefined')
      // Replace ${bar} → barValue
      .replace(/\$\{([^\}]+)\}/g, (_, name) => this.parseValue({name}))
      // Replace . → currentValue
      .replace(/\./g, `${this.parseValue({name: this.props.thatName})}`)

      .replace(/not\(/g, '!(')
      .replace(/and/g, ' && ')
      .replace(/or/g, ' || ')
      .replace(/[^!]=/g, '==')

      // Replace if(...) → JS ternary
      .replace(/\bif\s*\(([^,]+),([^,]+),([^)]+)\)/g, '($1 ? $2 : $3)')

      // Wrap string expression into quotes. Question schema like {..., "default": "yes"} → 'yes'
      .replace(/([a-zA-Z_][a-zA-Z0-9_]*)(\s*)?$/g, (match, val, space) => {
        // Skip if val is a known variable or boolean
        if (['true', 'false'].includes(val) /** TODO HARD*/) return match
        return `'${val}'${space ?? ''}`
      })
    try {
      console.log(formula, '➡️', processed, '➡️', eval(processed))
      return eval(processed)
    } catch (e) {
      console.error(formula, '➡️ 🛑', e)
      return
    }
  }
}
