import {Kobo} from 'kobo-sdk'

export const isValidDateString = (d: any): boolean => {
  return /^\d{4}-\d{2}-\d{2}/.test(d)
}

export type Group = Omit<Kobo.Form.Question, 'type'> & {
  type: 'begin_group'
  children: QuestionGrouped[]
}

export type Question = Omit<Kobo.Form.Question, 'type'> & {
  type: Exclude<Kobo.Form.QuestionType, 'begin_group'>
}

export type QuestionGrouped = Group | Question

export function nestGroups(flat: Kobo.Form.Question[]): QuestionGrouped[] {
  const stack: Group[] = []
  const result: QuestionGrouped[] = []

  for (const item of flat) {
    if (item.type === 'begin_group') {
      const group: Group = {...item as Group, children: []}
      stack.push(group)
    } else if (item.type === 'end_group') {
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
