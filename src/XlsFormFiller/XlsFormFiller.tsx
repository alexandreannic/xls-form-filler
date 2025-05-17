import {createContext, ReactNode, useContext, useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {Questions} from './Questions.tsx'
import {surveyNested} from './assets/surveyNested.ts'
import {FormValue, LodashPath} from './Path.ts'
import cloneDeep from 'lodash.clonedeep'
import set from 'lodash.set'

export interface XlsFormFillerContext {
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  values: FormValue
  updateValues: (path: LodashPath, value: any) => void
  langIndex: number
}

const Context = createContext({} as XlsFormFillerContext)

export const useXlsFormFillerContext = () => useContext<XlsFormFillerContext>(Context)

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

  const updateValues = (path: LodashPath, value: any) => {
    setValues(prev => {
      const clone = cloneDeep(prev)
      set(clone, path, value)
      return clone
    })
  }

  return (
    <Context.Provider value={{
      values,
      updateValues,
      langIndex,
      choicesMap,
      questionsMap,
    }}>
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
              questionsMap={questionsMap}
              langIndex={langIndex}
            />
          </Box>
        </Box>
      </Box>
    </Context.Provider>
  )
}
