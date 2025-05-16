import {Box, FormControlLabel, Grow, Input, Radio, RadioGroup, Typography} from '@mui/material'
import {evalXpath} from './eval.ts'
import {QuestionLayout, QuestionLayoutProps} from './QuestionLayout.tsx'
import {FormValue} from './XlsFormFiller.tsx'
import {Kobo} from 'kobo-sdk'
import {Dispatch, ReactNode, SetStateAction} from 'react'
import {mapFor} from '@axanc/ts-utils'

const parseChoiceFilter = (q: Kobo.Form.Question): undefined | {key: string, questionName: string} => {
  if (!q.choice_filter) return
  const [, key, questionName] = q.choice_filter.match(/([^=]*)=\$\{(.*?)}/) ?? []
  return {key, questionName}
}

export const Questions = ({
  values,
  setValues,
  survey,
  index,
  langIndex,
  choicesMap,
  questionsMap,
  repeatGroupName,
}: {
  setValues: Dispatch<SetStateAction<FormValue>>
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  langIndex: number
  survey: Kobo.Form['content']['survey']
  values: FormValue
  index?: number
  repeatGroupName?: string
}) => {
  const getLabel = (property?: string[]): string => {
    return property?.[langIndex] ?? ''
  }
  const res: ReactNode[] = []
  for (let i = 0; i < survey.length; i++) {
    const q = survey[i]
    const defaultValue = evalXpath({values, formula: q.default, questionsMap})
    const visible = evalXpath({values, formula: q.relevant, questionsMap}) ?? true
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValues(prev => ({...prev, [q.name]: e.target.value}))
    const label = getLabel(q.label)
    const isValid = evalXpath({values, formula: q.constraint, thatName: q.name, questionsMap}) ?? true
    const questionLayoutProps: Omit<QuestionLayoutProps, 'children'> = {
      label,
      hint: getLabel(q.hint),
      error: isValid ? undefined : getLabel(q.constraint_message)
    }
    const choiceFilter = parseChoiceFilter(q)
    res.push(
      <Grow key={q.$xpath} in={visible} mountOnEnter unmountOnExit>
        <Box>
          {(() => {
            switch (q.type) {
              case 'begin_repeat': {
                const repeated = evalXpath({values, formula: q.repeat_count, questionsMap})
                let depth = 1
                const subQuestions: Kobo.Form.Question[] = []
                i++
                while (depth > 0) {
                  console.log('>>>', survey[i])
                  subQuestions.push(survey[i])
                  if (survey[i].type === 'begin_repeat') depth++
                  else if (survey[i].type === 'end_repeat') depth--
                  i++
                }
                return repeated === 0 ? <></> : mapFor(repeated, i => (
                  <Questions
                    index={i}
                    key={i}
                    questionsMap={questionsMap}
                    repeatGroupName={q.name}
                    setValues={setValues}
                    choicesMap={choicesMap}
                    langIndex={langIndex}
                    survey={subQuestions}
                    values={values}
                  />
                ))
              }
              case 'begin_group': {
                return (
                  <Typography variant="h5">{label}</Typography>
                )
              }
              case 'date': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
                      type="date"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                )
              }
              case 'integer': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
                      type="number"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                )
              }
              case 'select_one': {
                let choices = choicesMap[q.select_from_list_name!] ?? []
                if (choiceFilter) {
                  choices = choices.filter(_ => (_ as any)[choiceFilter.key] === values[choiceFilter.questionName])
                }
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <RadioGroup
                      defaultValue={defaultValue}
                      onChange={onChange}
                    >
                      {choices.map(c => {
                        return (
                          <FormControlLabel label={c.label?.[langIndex] ?? ''} control={<Radio/>} value={c.name} key={c.name}/>
                        )
                      })}
                    </RadioGroup>
                  </QuestionLayout>
                )
              }
            }
          })()}
        </Box>
      </Grow>
    )
  }
  return res
}