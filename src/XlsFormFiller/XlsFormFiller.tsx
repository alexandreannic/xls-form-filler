import {surveyShort} from './surveyShort.ts'
import {useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {Questions} from './Questions.tsx'

export type FormValue = Record<string, any>

export const XlsFormFiller = ({
  schema = surveyShort,
  // schema = surveyShort,
}: {
  schema?: Kobo.Form['content']
}) => {
  const langIndex = 0
  const [values, setValues] = useState<Record<any, FormValue>>({})

  const choicesMap = useMemo(() => {
    return seq(schema.choices).groupBy(_ => _.list_name)
  }, [schema])

  const questionsMap = useMemo(() => {
    return seq(schema.survey).groupByFirst(_ => _.name)
  }, [schema])

  return (
    <Box sx={{maxWidth: 600, margin: 'auto'}}>
      <Questions
        survey={schema.survey}
        choicesMap={choicesMap}
        questionsMap={questionsMap}
        setValues={setValues}
        values={values}
        langIndex={langIndex}
      />
    </Box>
  )
}