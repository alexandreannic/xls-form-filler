import {Kobo} from 'kobo-sdk'

export const isValidDateString = (d: any): boolean => {
  return /^\d{4}-\d{2}-\d{2}/.test(d)
}

export const formatDateTime = (_: Date): string => _.toISOString()

export const formatDate = (_: Date): string => _.toISOString().substring(0, 10)

export type Group = Omit<Kobo.Form.Question, 'type'> & {
  type: 'begin_group' | 'begin_repeat'
  children: QuestionGrouped[]
}

export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes'
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = bytes / Math.pow(1024, i)
  return `${size.toFixed(2)} ${sizes[i]}`
}


export type Question = Omit<Kobo.Form.Question, 'type'> & {
  type: Exclude<Kobo.Form.QuestionType, 'begin_repeat' | 'begin_group'>
}

export type QuestionGrouped = Group | Question

export function nestGroups(flat: Kobo.Form.Question[]): QuestionGrouped[] {
  const stack: Group[] = []
  const result: QuestionGrouped[] = []

  for (const item of flat) {
    if (item.type === 'begin_group' || item.type === 'begin_repeat') {
      const group: Group = {...item as Group, children: []}
      stack.push(group)
    } else if (item.type === 'end_group' || item.type === 'end_repeat') {
      const completed = stack.pop()
      if (!completed) {
        throw new Error('Unmatched end_group found')
      }

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(completed)
      } else {
        result.push(completed)
      }
    } else {
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(item as QuestionGrouped)
      } else {
        result.push(item as QuestionGrouped)
      }
    }
  }

  // if (stack.length > 0) {
  //   throw new Error('Unclosed begin_group found')
  // }

  return result
}
