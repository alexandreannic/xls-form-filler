import {memo, useEffect, useMemo} from 'react'
import {FormValue, Path} from '../engine/path/Path.ts'
import {QuestionGrouped} from '../utils/helpers.ts'
import {useXlsFormFillerContext} from './XlsFormFiller.tsx'
import {Checkbox, FormControlLabel, FormGroup, Input, Radio, RadioGroup} from '@mui/material'
import {Kobo} from 'kobo-sdk'
import {QuestionLayout, QuestionLayoutProps} from './QuestionLayout.tsx'
import {QuestionImage} from './type/QuestionImage.tsx'
import {GroupLayout} from './GroupLayout.tsx'
import {mapFor} from '@axanc/ts-utils'
import {RepeatLayout} from './RepeatLayout.tsx'
import {AstFormEvaluator} from '../engine/ast/astEval.ts'
import {QuestionLocation} from './type/QuestionLocation.tsx'

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

export const Question = memo(({
  q,
  path,
}: {
  path: Path
  q: QuestionGrouped
}) => {
  const ctx = useXlsFormFillerContext()

  const logic = useMemo(() => {
    const engine = new AstFormEvaluator({
      values: ctx.values,
      path,
      thatName: q.name,
      questionsMap: ctx.questionsMap,
    })
    const relevant = q.relevant ? engine.eval(q.relevant) ?? false : true
    return relevant ? {
      relevant,
      calculation: engine.eval(q.calculation),
      defaultValue: engine.eval(q.default),
      valid: engine.eval(q.constraint) ?? true,
      repeated: engine.eval(q.repeat_count),
    } : {relevant}
  }, [ctx.values])

  const onChange = (value: FormValue) => {
    //ChangeEvent<HTMLInputElement>
    ctx.updateValues([...path.toLodashPath(), q.name], value)
  }

  const getLabel = (property?: string[]): string => {
    return property?.[ctx.langIndex] ?? ''
  }

  const layout: QuestionLayoutProps = {
    visible: logic.relevant,
    label: getLabel(q.label),
    hint: getLabel(q.hint),
    error: logic.valid ? undefined : getLabel(q.constraint_message)
  }

  const value = useMemo(() => {
    return ctx.getValue(path, q.name)
  }, [path, q.name])

  useEffect(() => {
    if (logic.defaultValue !== undefined && value !== logic.defaultValue) {
      onChange(logic.defaultValue)
    }
    if (logic.calculation !== undefined && value !== logic.calculation) {
      onChange(logic.calculation)
    }
  }, [logic.defaultValue, value, logic.calculation])

  switch (q.type) {
    case 'begin_group': {
      return (
        <GroupLayout {...layout}>
          {q.children.map(q =>
            <Question key={q.name} q={q} path={path}/>
          )}
        </GroupLayout>
      )
    }
    case 'begin_repeat': {
      return logic.repeated === 0 ? <></> :
        mapFor(logic.repeated, i => (
          <RepeatLayout index={i} key={i} {...layout}>
            {q.children.map(_ =>
              <Question
                key={i}
                path={path.add({index: i, repeatGroupName: q.name})}
                q={_}
              />
            )}
          </RepeatLayout>
        ))
    }
    case 'note': {
      return (
        <QuestionLayout {...layout}>
          {logic.calculation && (
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
      const choices = getFilteredList({choicesMap: ctx.choicesMap, q, value})
      return (
        <QuestionLayout {...layout}>
          <RadioGroup
            value={ctx.getValue(path, q.name) ?? ''}
            onChange={e => onChange(e.target.value)}
          >
            {choices.map(c => {
              return (
                <FormControlLabel label={c.label?.[ctx.langIndex] ?? ''} control={<Radio/>} value={c.name} key={c.name}/>
              )
            })}
          </RadioGroup>
        </QuestionLayout>
      )
    }
    case 'select_multiple': {
      const choices = getFilteredList({choicesMap: ctx.choicesMap, q, value})
      const selectedValues: string[] = ctx.getValue(path, q.name)?.split(' ') ?? []
      return (
        <QuestionLayout {...layout}>
          <FormGroup>
            {choices.map(c => {
              const value = c.name
              const label = c.label?.[ctx.langIndex] ?? ''
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
    case 'geopoint': {
      return (
        <QuestionLayout {...layout}>
          <QuestionLocation value={value} onChange={onChange}/>
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
    case 'calculate': {
      return <></>
    }
    default: {
      return (
        <div>TODO {q.type} {q.name}</div>
      )
    }
  }
})