import {Kobo} from 'kobo-sdk'

const today = () => new Date().toISOString().substring(0, 10)

const selected = (value: string, match: string): boolean => {
  return value?.split(/\s+/).includes(match)
}

const parseValue = ({
  value,
  questionsMap,
  name
}: {
  name: string,
  value: any,
  questionsMap: Record<string, Kobo.Form.Question>
}): any => {
  const type = questionsMap[name].type
  switch (type) {
    case 'decimal':
    case 'integer': {
      console.log({name, type: typeof value, value})
      return isNaN(value) || value === '' ? undefined : `${value}`
    }
    default:
      `'${value}'`
  }
}

export const evalXpath = ({
  values,
  formula,
  thatName,
  questionsMap,
}: {
  questionsMap: Record<string, Kobo.Form.Question>
  thatName?: any
  values: Record<string, any>
  formula?: string
}): any => {
  if (!formula || formula === '') return
  const processed = formula
    // Replace ${bar} → barValue
    .replace(/\$\{([^\}]+)\}/g, (_, path) => parseValue({value: values[path], questionsMap, name: path}))
    // Replace . → currentValue
    .replace(/\./g, `${parseValue({value: values[thatName], questionsMap, name: thatName})}`)

    .replace(/and/g, ' && ')
    .replace(/or/g, ' || ')

    // Replace if(...) → JS ternary
    .replace(/\bif\s*\(([^,]+),([^,]+),([^)]+)\)/g, '($1 ? $2 : $3)')

    // Wrap string expression into quotes. Question schema like {..., "default": "yes"} → 'yes'
    .replace(/([a-zA-Z_][a-zA-Z0-9_]*)(\s*)?$/g, (match, val, space) => {
      // Skip if val is a known variable or boolean
      if (['true', 'false'].includes(val) || values.hasOwnProperty(val)) return match
      return `'${val}'${space ?? ''}`
    })
  console.log(formula, processed)
  return eval(processed)
}
