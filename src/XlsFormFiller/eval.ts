const today = () => new Date().toISOString().substring(0, 10)

const selected = (value: string, match: string): boolean => {
  return value?.split(/\s+/).includes(match)
}

export const evalXpath = ({
  values,
  formula
}: {
  values: Record<string, any>
  formula?: string
}): any => {
  if (!formula) return
  const processed = formula
    // Replace ${bar} → bar
    .replace(/\$\{([^\}]+)\}/g, (_, path) => {
      if (isNaN(values[path])) return `'${values[path]}'`
      return `${values[path]}`
    })

    .replace(/and/g, ' && ')

    // Replace if(...) → JS ternary
    .replace(/\bif\s*\(([^,]+),([^,]+),([^)]+)\)/g, '($1 ? $2 : $3)')
  console.log(formula, processed)
  return eval(processed)
}
