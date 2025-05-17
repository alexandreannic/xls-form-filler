import {useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {Questions} from './Questions.tsx'
import {surveyNested} from './assets/surveyNested.ts'
import {FormValue} from './Path.ts'

export const XlsFormFiller = ({
  // schema = surveyShort,
  // schema = surveyShort,
  schema = surveyNested.content,
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
    <Box sx={{maxWidth: 1000, minWidth: 1000, margin: 'auto'}}>
      <Box sx={{display: 'flex'}}>
        <Box component="pre" sx={{minWidth: 400}}>
          <Box component="pre" sx={{width: 400, position: 'fixed'}}>
            {JSON.stringify(values, null, 2)}
          </Box>
        </Box>
        <Box>
          <Questions
            survey={schema.survey}
            choicesMap={choicesMap}
            questionsMap={questionsMap}
            setValues={setValues}
            values={values}
            langIndex={langIndex}
          />
        </Box>
      </Box>
    </Box>
  )
}