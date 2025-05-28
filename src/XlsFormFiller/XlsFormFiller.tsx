import {createContext, useContext, useEffect, useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box, MenuItem, Select} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {FormValues, LodashPath, Path} from '../engine/path/Path.ts'
import cloneDeep from 'lodash.clonedeep'
import set from 'lodash.set'
import {surveyShort} from '../../test/survey/surveyShort.ts'
import get from 'lodash.get'
import {survey} from '../../test/survey/survey.ts'
import {nestGroups} from '../utils/helpers.ts'
import {Question} from './Question.tsx'
import {surveyMsme} from '../../test/survey/surveyMsme.ts'

export interface XlsFormFillerContext {
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  values: FormValues
  getValue: (path: Path, name: string) => any
  updateValues: (path: LodashPath, value: any) => void
  langIndex: number
  labels: {
    getMyLocation?: string
    selectImage?: string
    changeImage?: string
  }
}

const Context = createContext({} as XlsFormFillerContext)

export const useXlsFormFillerContext = () => useContext<XlsFormFillerContext>(Context)

export const XlsFormFiller = ({
  // schema = surveyShort,
  schema = surveyMsme,
  labels = {
    getMyLocation: 'Get my location',
    selectImage: 'Select Image',
    changeImage: 'Change Image',
  },
  // schema = survey,
  // schema = surveyNested.content,
}: {
  labels?: XlsFormFillerContext['labels']
  schema?: Kobo.Form['content']
}) => {
  const [langIndex, setLangIndex] = useState(0)
  const [values, setValues] = useState<Record<any, FormValues>>({})
  const [attachments, setAttachments] = useState()

  useEffect(() => {
    console.log('default', schema.translations.indexOf(schema.settings.default_language))
    setLangIndex(schema.translations.indexOf(schema.settings.default_language))
  }, [schema])

  const {
    groupedSurvey,
    choicesMap,
    questionsMap,
  } = useMemo(() => {
    return {
      groupedSurvey: nestGroups(schema.survey),
      choicesMap: seq(schema.choices).groupBy(_ => _.list_name),
      questionsMap: seq(schema.survey).groupByFirst(_ => _.name),
    }
  }, [schema])

  const getValue = (path: Path, name: string): any => {
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
      labels,
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
            <Box component="pre" sx={{width: 400, fontSize: '0.75em', maxHeight: '80vh', overflow: 'auto', position: 'fixed'}}>
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
            <Select value={langIndex} onChange={e => setLangIndex(+e.target.value)} variant="outlined">
              {schema.translations.map((_, i) =>
                <MenuItem key={i} value={i}>{_}</MenuItem>
              )}
            </Select>
            {groupedSurvey.map(q =>
              <Question key={q.name} q={q} path={new Path()}/>
            )}
          </Box>
        </Box>
      </Box>
    </Context.Provider>
  )
}
