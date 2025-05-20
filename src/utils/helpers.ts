export const isValidDateString = (d: any): boolean => {
  return /^\d{4}-\d{2}-\d{2}/.test(d)
}