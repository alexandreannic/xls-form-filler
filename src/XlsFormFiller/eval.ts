const today = () => new Date().toISOString().substring(0, 10)

const selected = (value: string, match: string): boolean => {
  return value?.split(/\s+/).includes(match)
}

const parseValue = (value: any): any => {
  if (isNaN(value)) return `'${value}'`
  return `${value}`
}

export const evalXpath = ({
  values,
  formula,
  thatName,
}: {
  thatName?: any
  values: Record<string, any>
  formula?: string
}): any => {
  if (!formula) return
  const processed = formula
    // Replace ${bar} → bar
    .replace(/\$\{([^\}]+)\}/g, (_, path) => parseValue(values[path]))
    .replace(/\./g, `${parseValue(values[thatName])}`)

    .replace(/and/g, ' && ')
    .replace(/or/g, ' || ')

    // Replace if(...) → JS ternary
    .replace(/\bif\s*\(([^,]+),([^,]+),([^)]+)\)/g, '($1 ? $2 : $3)')
  console.log(formula, processed)
  return eval(processed)
}
