import {surveyShort} from './surveyShort.ts'
import {useMemo, useState} from 'react'
import {match, seq} from '@axanc/ts-utils'
import {evalXpath} from './eval.ts'
import {Box, FormControlLabel, Grow, Input, Radio, RadioGroup, Typography} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {QuestionLayout} from './QuestionLayout.tsx'

export type FormValue = Record<string, any>

export const XlsFormFiller = ({
  schema = surveyShort,
}: {
  schema?: Kobo.Form['content']
}) => {
  const lang = 0
  const [value, setValue] = useState<Record<any, FormValue>>({})

  const choicesIndex = useMemo(() => {
    return seq(schema.choices).groupBy(_ => _.list_name)
  }, [schema])

  return (
    <Box sx={{maxWidth: 600, margin: 'auto'}}>
      {schema.survey.map(q => {
        const defaultValue = evalXpath({values: value, formula: q.default})
        const visible = q.relevant && q.relevant !== '' ? evalXpath({values: value, formula: q.relevant}) : true
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(prev => ({...prev, [q.name]: e.target.value}))
        const label = q.label?.[lang] ?? ''
        if (!visible) return <Box>{visible}</Box>
        return (
          <Grow key={q.$xpath} in={visible}>
            <Box>
              {match(q.type).cases({
                begin_group: (
                  <Typography variant="h5">{label}</Typography>
                ),
                date: (
                  <QuestionLayout label={label}>
                    <Input
                      fullWidth
                      type="date"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                ),
                integer: (
                  <QuestionLayout label={label}>
                    <Input
                      fullWidth
                      type="number"
                      defaultValue={defaultValue}
                      onChange={onChange}
                    />
                  </QuestionLayout>
                ),
                select_one: (
                  <QuestionLayout label={label}>
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