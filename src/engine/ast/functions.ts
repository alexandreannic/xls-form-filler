import {AstError, EvalEnvironment} from './astEval.ts'
import {seq} from '@axanc/ts-utils'
import {formatDate} from '../../utils/helpers.ts'

export const now = new Date()

class Function {
  constructor(private params: {
    localName: string
    signature?: {
      type?: 'number' | 'string' | 'boolean'
      arityType: 'optional' | 'required'
    }[]
    call: (...args: any[]) => any
  }) {
  }

  get localName() {
    return this.params.localName
  }

  get signature() {
    return this.params.signature
  }

  get call() {
    return this.params.call
  }
}

export const functions = {

  once: new Function({
    localName: 'once',
    call: (env: EvalEnvironment, args: any[]) => {
      // TODO!!
      return args[0]
    }
  }),
  now: new Function({
    localName: 'now',
    call: (env: EvalEnvironment, args: any[]) => {
      return now
    }
  }),

  regex: new Function({
    localName: 'regex',
    call: (env: EvalEnvironment, args: any[]) => {
      return new RegExp(args[1]).test(args[0])
    }
  }),

  selected: new Function({
    localName: 'selected',
    call: (env: EvalEnvironment, args: any[]) => {
      return args[0]?.split(/\s+/).includes(args[1])
    }
  }),

  if: new Function({
    localName: 'if',
    call: (env: EvalEnvironment, args: any[]) => {
      return args[0] ? args[1] : args[2]
    }
  }),

  sum: new Function({
    localName: 'sum',
    call: (env: EvalEnvironment, [args]: any[]) => {
      return args.reduce((sum: number, _: any) => {
        if (isNaN(_)) return sum
        return sum + +_
      }, 0)
    }
  }),

  countSelected: new Function({
    localName: 'count-selected',
    call: (env: EvalEnvironment, args: any[]) => {
      return args[0]?.split(' ').length ?? 0
    }
  }),

  coalesce: new Function({
    localName: 'coalesce',
    call: (env: EvalEnvironment, args: any[]) => {
      return args.find(v => v !== null && v !== undefined && v !== '')
    }
  }),

  indexedRepeat:
    new Function({
      localName: 'indexed-repeat',
      call: (env: EvalEnvironment, args: any[]) => {
        return new RegExp(args[1]).test(args[0])
      }
    }),

  position:
    new Function({
      localName: 'position',
      call: (env: EvalEnvironment, args: any[]) => {
        console.log('position', args)
        return args[0]
        // if (typeof args[0] !== 'number') throw new InvalidInteger()
        // return args[0] === args[1]
      }
    }),

  today: new Function({
    localName: 'today',
    call: (env: EvalEnvironment, args: any[]) => {
      return formatDate(now)
    }
  }),

  int:
    new Function({
      localName: 'int',
      call: (env: EvalEnvironment, [int]: any[]) => {
        if (typeof int !== 'number') throw new AstError.InvalidInteger()
        return int > 0 ? Math.floor(int) : Math.ceil(int)
      }
    }),

  substr:
    new Function({
      localName: 'substr',
      signature: [
        {arityType: 'required'},
        {arityType: 'required', type: 'number'},
        {arityType: 'optional', type: 'number'},
      ],
      call: (env, [string, start, end]): string => {
        const {length} = string ?? ''
        if (length === 0) {
          return ''
        }
        end = end ?? length
        if (start < 0) {
          start = length + start
        }
        if (end < 0) {
          end = length + end
        }
        end = Math.min(Math.max(0, end), length)
        start = Math.min(Math.max(0, start), length)
        return start <= end ? string.substring(start, end) : ''
      }
    }),
  ...
    seq([
      'abs',
      'acos',
      'asin',
      'atan',
      'ceil',
      'cos',
      'exp',
      'floor',
      'log',
      'log10',
      'round',
      'sin',
      'sqrt',
      'tan'
    ] as const).reduceObject(method => [
      method,
      new Function({
        localName: method,
        call: (env, [number]) => {
          if (Number.isNaN(number)) {
            return number
          }
          return Math[method](number)
        }
      })
    ]),

  stringLength:
    new Function({
      localName: 'string-length',
      signature: [{arityType: 'optional', type: 'string'}],
      call: (env, [expression]): number => {
        return expression?.toString().length
      }
    }),

  substringAfter:
    new Function({
      localName: 'substring-after',
      signature: [
        {arityType: 'required', type: 'string'},
        {arityType: 'required', type: 'string'},
      ],
      call: (env, [haystack, needle]): string => {
        if (haystack === '') {
          return ''
        }
        if (needle === '') {
          return haystack
        }
        const needleIndex = haystack.indexOf(needle)
        return needleIndex === -1 ? '' : haystack.slice(needleIndex + 1)
      }
    }),

  substringBefore:
    new Function({
      localName: 'substring-before',
      signature: [{arityType: 'required'}, {arityType: 'required', type: 'string'}],
      call: (env, [haystack, needle]): string => {
        if (haystack === '') {
          return ''
        }
        const needleIndex = haystack.indexOf(needle)
        return needleIndex === -1 ? '' : haystack.slice(0, needleIndex)
      }
    }),

  formatDateTime:
    new Function({
      localName: 'format-date-time',
      signature: [
        {arityType: 'required', type: 'string'},
        {arityType: 'required', type: 'string'},
      ],
      call: (env, [value, format]) => {
        //   const dateTime = dateTimeFromString(context.timeZone, value)
        //   if (dateTime == null) {
        //     return ''
        //   }
        //   return dateTimeFormatter(format, dateTime)
      }
    }),
}