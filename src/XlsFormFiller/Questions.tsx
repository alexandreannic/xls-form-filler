import {Box, Checkbox, FormControlLabel, FormGroup, Grow, Input, Radio, RadioGroup, Typography, useTheme} from '@mui/material'
import {QuestionLayout, QuestionLayoutProps} from './QuestionLayout.tsx'
import {Kobo} from 'kobo-sdk'
import {ChangeEvent, ReactNode} from 'react'
import {mapFor} from '@axanc/ts-utils'
import {RepeatLayout} from './RepeatLayout.tsx'
import {FormValue, Path} from '../engine/path/Path.ts'
// import {XFormEngine} from './eval.ts'
import {useXlsFormFillerContext} from './XlsFormFiller.tsx'
import {AstFormEvaluator} from '../engine/ast/astEval.ts'
import {XFormEngine} from '../engine/eval.ts'


const parseChoiceFilter = (q: Kobo.Form.Question): undefined | {key: string, questionName: string} => {
  if (!q.choice_filter) return
  const [, key, questionName] = q.choice_filter.match(/([^=]*)=\$\{(.*?)}/) ?? []
  return {key, questionName}
}

const getFilteredList = ({
  q,
  choicesMap,
  value,
}: {
  value: FormValue
  q: Kobo.Form.Question
  choicesMap: Record<string, Kobo.Form.Choice[]>
}) => {
  const choiceFilter = parseChoiceFilter(q)
  let choices = choicesMap[q.select_from_list_name!] ?? []
  if (choiceFilter) {
    choices = choices.filter(_ => (_ as any)[choiceFilter.key] === value)
  }
  return choices
}

export const Questions = ({
  survey,
  path = new Path()
}: {
  path?: Path
  survey: Kobo.Form['content']['survey']
}) => {
  const {values, getValue, updateValues, questionsMap, langIndex, choicesMap} = useXlsFormFillerContext()
  const t = useTheme()
  const getLabel = (property?: string[]): string => {
    return property?.[langIndex] ?? ''
  }
  const res: ReactNode[] = []
  for (let i = 0; i < survey.length; i++) {
    const q = survey[i]
    const engine = new AstFormEvaluator({
      values,
      path,
      thatName: q.name,
      questionsMap,
    })
    const onChange = (value: FormValue) => {
      //ChangeEvent<HTMLInputElement>
      updateValues([...path.toLodashPath(), q.name], value)
    }
    const label = getLabel(q.label)

    const calculation = engine.eval(q.calculation)
    const defaultValue = engine.eval(q.default)
    const relevant = q.relevant ? engine.eval(q.relevant) ?? false : true
    const valid = engine.eval(q.constraint) ?? true
    const value = calculation ?? getValue(path, q.name)
    if ((value === undefined || value === null) && defaultValue !== undefined) {
      onChange(defaultValue)
    }

    const questionLayoutProps: Omit<QuestionLayoutProps, 'children'> = {
      label,
      hint: getLabel(q.hint),
      error: valid ? undefined : getLabel(q.constraint_message)
    }
    res.push(
      <Grow key={q.$xpath} in={relevant} mountOnEnter unmountOnExit>
        <Box>
          {(() => {
            switch (q.type) {
              case 'begin_repeat': {
                const repeated = engine.eval(q.repeat_count)
                let depth = 1
                const subQuestions: Kobo.Form.Question[] = []
                i++
                while (depth > 0) {
                  subQuestions.push(survey[i])
                  if (survey[i].type === 'begin_repeat') depth++
                  else if (survey[i].type === 'end_repeat') depth--
                  i++
                }
                return repeated === 0 ? <></> :
                  mapFor(repeated, i => (
                    <RepeatLayout index={i} key={i}>
                      <Questions
                        path={path.add({index: i, repeatGroupName: q.name})}
                        key={i}
                        survey={subQuestions}
                      />
                    </RepeatLayout>
                  ))
              }
              case 'begin_group': {
                return (
                  <Typography variant="h5">{label}</Typography>
                )
              }
              case 'note': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    {calculation && (
                      <Input value={value} disabled/>
                    )}
                  </QuestionLayout>
                )
              }
              case 'date': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      value={value}
                      required={q.required}
                      fullWidth
                      type="date"
                      onChange={e => onChange(e.target.value)}
                    />
                  </QuestionLayout>
                )
              }
              case 'text': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      value={value}
                      required={q.required}
                      fullWidth
                      onChange={e => onChange(e.target.value)}
                    />
                  </QuestionLayout>
                )
              }
              case 'integer': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      value={value}
                      required={q.required}
                      fullWidth
                      type="number"
                      onChange={e => onChange(e.target.value)}
                    />
                  </QuestionLayout>
                )
              }
              case 'select_one': {
                const choices = getFilteredList({choicesMap, q, value})
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <RadioGroup
                      value={getValue(path, q.name) ?? ''}
                      onChange={e => onChange(e.target.value)}
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
              case 'select_multiple': {
                const choices = getFilteredList({choicesMap, q, value})
                const selectedValues: string[] = getValue(path, q.name)?.split(' ') ?? []
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <FormGroup>
                      {choices.map(c => {
                        const value = c.name
                        const label = c.label?.[langIndex] ?? ''
                        const checked = selectedValues.includes(value)

                        return (
                          <FormControlLabel
                            key={value}
                            label={label}
                            control={
                              <Checkbox
                                checked={checked}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    onChange([...selectedValues, value].join(' ').trim())
                                  else
                                    onChange(selectedValues.filter(v => v !== value).join(' ').trim())
                                }}
                              />
                            }
                          />
                        )
                      })}
                    </FormGroup>
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