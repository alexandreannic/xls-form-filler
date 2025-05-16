import {surveyShort} from './surveyShort.ts'
import {useMemo, useState} from 'react'
import {match, seq} from '@axanc/ts-utils'
import {evalXpath} from './eval.ts'
import {Box, FormControlLabel, Grow, Input, Radio, RadioGroup, Typography} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {QuestionLayout, QuestionLayoutProps} from './QuestionLayout.tsx'

export type FormValue = Record<string, any>

export const XlsFormFiller = ({
  schema = surveyShort,
  // schema = surveyShort,
}: {
  schema?: Kobo.Form['content']
}) => {
  const lang = 0
  const [values, setValues] = useState<Record<any, FormValue>>({})

  const choicesIndex = useMemo(() => {
    return seq(schema.choices).groupBy(_ => _.list_name)
  }, [schema])

  const getLabel = (property?: string[]): string => {
    return property?.[lang] ?? ''
  }

  return (
    <Box sx={{maxWidth: 600, margin: 'auto'}}>
      {schema.survey.map(q => {
        const defaultValue = evalXpath({values, formula: q.default})
        const visible = q.relevant && q.relevant !== '' ? evalXpath({values, formula: q.relevant}) : true
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValues(prev => ({...prev, [q.name]: e.target.value}))
        const label = getLabel(q.label)
        const isValid = q.constraint ? evalXpath({values, formula: q.constraint, thatName: q.name}) : true
        const questionLayoutProps: Omit<QuestionLayoutProps, 'children'> = {
          label,
          hint: getLabel(q.hint),
          error: isValid ? undefined : getLabel(q.constraint_message)
        }
        if (!visible) return <Box>{visible}</Box>
        return (
          <Grow key={q.$xpath} in={visible}>
            <Box>
              {match(q.type).cases({
                begin_group: (
                  <Typography variant="h5">{label}</Typography>
                ),
                date: (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
                      type="date"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                ),
                integer: (
                  <QuestionLayout {...questionLayoutProps}>
                    <Input
                      required={q.required}
                      fullWidth
                      type="number"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                ),
                select_one: (
                  <QuestionLayout {...questionLayoutProps}>
                    <RadioGroup
                      defaultValue={defaultValue}
                      onChange={onChange}
                    >
                      {choicesIndex[q.select_from_list_name!]?.map(c =>
                        <FormControlLabel label={c.label?.[lang] ?? ''} control={<Radio/>} value={c.name} key={c.name}/>
                      )}
                    </RadioGroup>
                  </QuestionLayout>
                )
              }).default(() => <></>)}
            </Box>
          </Grow>
        )
      })}
    </Box>
  )
}