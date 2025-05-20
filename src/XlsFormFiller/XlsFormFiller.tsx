import {createContext, useContext, useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {Questions} from './Questions.tsx'
import {surveyNested} from '../assets/surveyNested.ts'
import {FormValues, LodashPath, Path} from '../engine/path/Path.ts'
import cloneDeep from 'lodash.clonedeep'
import set from 'lodash.set'
import {surveyShort} from '../assets/surveyShort.ts'
import get from 'lodash.get'
import {survey} from '../assets/survey.ts'

export interface XlsFormFillerContext {
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  values: FormValues
  getValue: (path: Path, name: string) => any
  updateValues: (path: LodashPath, value: any) => void
  langIndex: number
}

const Context = createContext({} as XlsFormFillerContext)

export const useXlsFormFillerContext = () => useContext<XlsFormFillerContext>(Context)

export const XlsFormFiller = ({
  // schema = surveyShort,
  schema = survey,
  // schema = surveyNested.content,
}: {
  schema?: Kobo.Form['content']
}) => {
  const langIndex = 0
  const [values, setValues] = useState<Record<any, FormValues>>({})

  const choicesMap = useMemo(() => {
    return seq(schema.choices).groupBy(_ => _.list_name)
  }, [schema])

  const questionsMap = useMemo(() => {
    return seq(schema.survey).groupByFirst(_ => _.name)
  }, [schema])

  const getValue = (path: Path, name: string): any => {
    console.log('>> get value', [...path.toLodashPath(), name], values, get(values, [...path.toLodashPath(), name]))
    return get(values, [...path.toLodashPath(), name])
  }

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
      getValue,
      updateValues,
      langIndex,
      choicesMap,
      questionsMap,
    }}>
      <Box sx={{maxWidth: 1000, minWidth: 1000, margin: 'auto'}}>
        <Box sx={{display: 'flex'}}>
          <Box component="pre" sx={{minWidth: 400}}>
            <Box component="pre" sx={{width: 400, position: 'fixed'}}>
              {(() => {
                try {
                  return JSON.stringify(values, null, 2)
                } catch (e) {
                  console.log('⚙️', values)
                  return e + ''
                }
              })()}
            </Box>
          </Box>
          <Box>
            <Questions survey={schema.survey}/>
          </Box>
        </Box>
      </Box>
    </Context.Provider>
  )
}
