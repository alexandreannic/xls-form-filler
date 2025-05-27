import {memo, useEffect, useMemo} from 'react'
import {FormValue, Path} from '../engine/path/Path.ts'
import {QuestionGrouped} from '../utils/helpers.ts'
import {useXlsFormFillerContext} from './XlsFormFiller.tsx'
import {Checkbox, FormControlLabel, FormGroup, Input, Radio, RadioGroup} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {QuestionLayout} from './QuestionLayout.tsx'
import {QuestionImage} from './QuestionImage.tsx'

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

export type QuestionCalculations = {
  relevant?: boolean
  valid?: boolean
  calculation?: FormValue
  defaultValue?: FormValue
}

export type LayoutProps = {
  label: string
  hint?: string
  error?: string
}

export const Question = memo(({
  q,
  path,
  calculations,
  layout,
}: {
  path: Path
  q: QuestionGrouped
  layout: LayoutProps
  calculations: QuestionCalculations
}) => {
  const {values, getValue, updateValues, questionsMap, langIndex, choicesMap} = useXlsFormFillerContext()

  const onChange = (value: FormValue) => {
    //ChangeEvent<HTMLInputElement>
    updateValues([...path.toLodashPath(), q.name], value)
  }

  const value = useMemo(() => {
    return getValue(path, q.name)
  }, [path, q.name])

  useEffect(() => {
    if (calculations.defaultValue !== undefined && value !== calculations.defaultValue) {
      onChange(calculations.defaultValue)
    }
    if (calculations.calculation !== undefined && value !== calculations.calculation) {
      onChange(calculations.calculation)
    }
  }, [calculations.defaultValue, value, calculations.calculation])

  switch (q.type) {
    case 'note': {
      return (
        <QuestionLayout {...layout}>
          {calculations.calculation && (
            <Input value={value} disabled/>
          )}
        </QuestionLayout>
      )
    }
    case 'date': {
      return (
        <QuestionLayout {...layout}>
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
        <QuestionLayout {...layout}>
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
        <QuestionLayout {...layout}>
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
        <QuestionLayout {...layout}>
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
        <QuestionLayout {...layout}>
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
    case 'image': {
      return (
        <QuestionLayout {...layout}>
          <QuestionImage value={value} onChange={onChange}/>
        </QuestionLayout>
      )
    }
  }
})