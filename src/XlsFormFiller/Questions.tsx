import {Box, FormControlLabel, Grow, Input, Radio, RadioGroup, Typography, useTheme} from '@mui/material'
import {QuestionLayout, QuestionLayoutProps} from './QuestionLayout.tsx'
import {Kobo} from 'kobo-sdk'
import {ChangeEvent, Dispatch, ReactNode, SetStateAction} from 'react'
import {mapFor} from '@axanc/ts-utils'
import {RepeatLayout} from './RepeatLayout.tsx'
import set from 'lodash.set'
import {Path} from './Path.ts'
import {FormValue} from './Path.ts'
import {XFormEngine} from './eval.ts'

const parseChoiceFilter = (q: Kobo.Form.Question): undefined | {key: string, questionName: string} => {
  if (!q.choice_filter) return
  const [, key, questionName] = q.choice_filter.match(/([^=]*)=\$\{(.*?)}/) ?? []
  return {key, questionName}
}

export const Questions = ({
  values,
  setValues,
  survey,
  langIndex,
  choicesMap,
  questionsMap,
  path = new Path()
  // index,
  // repeatGroupName,
}: {
  path?: Path
  setValues: Dispatch<SetStateAction<FormValue>>
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  langIndex: number
  survey: Kobo.Form['content']['survey']
  values: FormValue
  // index?: number
  // repeatGroupName?: string
}) => {
  const t = useTheme()
  const getLabel = (property?: string[]): string => {
    return property?.[langIndex] ?? ''
  }
  const res: ReactNode[] = []
  for (let i = 0; i < survey.length; i++) {
    const q = survey[i]
    const engine = new XFormEngine({
      values,
      path,
      questionsMap,
      thatName: q.name
    })
    // if (defaultValue && defaultValue !== '' && !(q.name in values)) {
    //   setValues(prev => ({...prev, [q.name]: defaultValue}))
    // }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValues(prev => ({...prev, [q.name]: e.target.value}))
    const label = getLabel(q.label)

    const calculation = engine.eval(q.calculation)
    const defaultValue = engine.eval(q.default)
    const relevant = q.relevant ? engine.eval(q.relevant) ?? false : true
    const valid = engine.eval(q.constraint) ?? true

    const questionLayoutProps: Omit<QuestionLayoutProps, 'children'> = {
      label,
      hint: getLabel(q.hint),
      error: valid ? undefined : getLabel(q.constraint_message)
    }
    const choiceFilter = parseChoiceFilter(q)
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
                    <RepeatLayout index={i}>
                      <Questions
                        // index={i}
                        // repeatGroupName={q.name}
                        path={path.add({index: i, repeatGroupName: q.name})}
                        key={i}
                        questionsMap={questionsMap}
                        setValues={_ => setValues(prev => {
                          // console.log('setValues', _())
                          const copy = {...prev}
                          set(copy, `${q.name}[${i}]`, _())
                          // set(copy, [q.name, '' + index], _())
                          return copy
                        })}
                        choicesMap={choicesMap}
                        langIndex={langIndex}
                        survey={subQuestions}
                        values={values}
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
                      <Input value={calculation} disabled/>
                    )}
                  </QuestionLayout>
                )
              }
              case 'date': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
                      type="date"
                      onChange={onChange}
                    />
                  </QuestionLayout>
                )
              }
              case 'text': {
                return (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
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