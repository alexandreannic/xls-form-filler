import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {seq} from '@axanc/ts-utils'
import {Box, Button, Icon, MenuItem, Select} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {FormValues, LodashPath, Path} from '../engine/path/Path.ts'
import cloneDeep from 'lodash.clonedeep'
import set from 'lodash.set'
import {surveyShort} from '../../test/survey/surveyShort.ts'
import get from 'lodash.get'
import {survey} from '../../test/survey/survey.ts'
import {formatDateTime, nestGroups} from '../utils/helpers.ts'
import {Question} from './Question.tsx'
import {surveyMsme} from '../../test/survey/surveyMsme.ts'
import {useAttachments} from './useAttachments.ts'
import {now} from '../engine/ast/functions.ts'

export type XlsFormProps = {
  answers?: FormValues
  onSubmit: (_: {attachments: File[], answers: FormValues}) => void
  survey: Kobo.Form['content']
  labels?: {
    submit?: string
    getMyLocation?: string
    selectImage?: string
    changeImage?: string
    selectFile?: string
    changeFile?: string
  }
}

export interface XlsFormFillerContext {
  choicesMap: Record<string, Kobo.Form.Choice[]>
  questionsMap: Record<string, Kobo.Form.Question>
  values: FormValues
  getValue: (path: Path, name: string) => any
  updateValues: (path: LodashPath, value: any) => void
  langIndex: number
  attachments: ReturnType<typeof useAttachments>
  labels: NonNullable<XlsFormProps['labels']>
}

const Context = createContext({} as XlsFormFillerContext)

export const useXlsFormFillerContext = () => useContext<XlsFormFillerContext>(Context)

export const XlsFormFiller = ({
  answers = {},
  survey,
  onSubmit,
  labels = {
    submit: 'Submit',
    getMyLocation: 'Get my location',
    selectImage: 'Click to select an image...',
    changeImage: 'Click to change the image...',
    selectFile: 'Click to select an file...',
    changeFile: 'Click to change the file...',
  },
}: XlsFormProps) => {
  const [langIndex, setLangIndex] = useState(0)
  const [values, setValues] = useState<FormValues>(answers)
  const attachments = useAttachments()

  console.log('>>>>values', values)
  useEffect(() => {
    setLangIndex(survey.translations.indexOf(survey.settings.default_language))
  }, [survey])

  const {
    groupedSurvey,
    choicesMap,
    questionsMap,
  } = useMemo(() => {
    return {
      groupedSurvey: nestGroups(survey.survey),
      choicesMap: seq(survey.choices).groupBy(_ => _.list_name),
      questionsMap: seq(survey.survey).groupByFirst(_ => _.name),
    }
  }, [survey])

  const getValue = useCallback((path: Path, name: string): any => {
    return get(values, [...path.toLodashPath(), name])
  }, [values])

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
      attachments,
    }}>
      <Box sx={{width: '100%'}}>
        <Select sx={{mb: 1,}} size="small" value={langIndex} onChange={e => setLangIndex(+e.target.value)} variant="outlined">
          {survey.translations.map((_, i) =>
            <MenuItem key={i} value={i}>{_}</MenuItem>
          )}
        </Select>
        {groupedSurvey.map(q =>
          <Question key={q.name} q={q} path={new Path()}/>
        )}
      </Box>
      <Box sx={{mt: 1, display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          onClick={() => {
            const answers = {...values}
            if (questionsMap.start && !values.start) {
              answers.start = formatDateTime(now)
            }
            if (questionsMap.end) {
              answers.end = formatDateTime(new Date())
            }
            onSubmit({
              answers,
              attachments: Object.values(attachments.list),
            })
          }}
          startIcon={<Icon>send</Icon>}
          variant="contained"
        >
          {labels.submit}
        </Button>
      </Box>
    </Context.Provider>
  )
}
