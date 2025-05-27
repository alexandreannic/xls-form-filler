import {Box, Collapse} from '@mui/material'
import {ReactNode} from 'react'
import {mapFor} from '@axanc/ts-utils'
import {RepeatLayout} from './RepeatLayout.tsx'
import {Path} from '../engine/path/Path.ts'
import {useXlsFormFillerContext} from './XlsFormFiller.tsx'
import {AstFormEvaluator} from '../engine/ast/astEval.ts'
import {QuestionGrouped} from '../utils/helpers.ts'
import {GroupLayout} from './GroupLayout.tsx'
import {Question, QuestionCalculations} from './Question.tsx'

export const Questions = ({
  survey,
  path = new Path()
}: {
  path?: Path
  survey: QuestionGrouped[]
}) => {
  const {values, getValue, updateValues, questionsMap, langIndex, choicesMap} = useXlsFormFillerContext()

  const getLabel = (property?: string[]): string => {
    return property?.[langIndex] ?? ''
  }

  const res: ReactNode[] = []
  for (let i = 0; i < survey.length; i++) {
    const q = survey[i]
    const engine = new AstFormEvaluator({
      values,
      path,
      thatName: q.name,
      questionsMap,
    })

    const calculations: QuestionCalculations = {
      relevant: q.relevant ? engine.eval(q.relevant) ?? false : true,
      calculation: engine.eval(q.calculation),
      defaultValue: engine.eval(q.default),
      valid: engine.eval(q.constraint) ?? true,
    }

    const layout = {
      label: getLabel(q.label),
      hint: getLabel(q.hint),
      error: calculations.valid ? undefined : getLabel(q.constraint_message)
    }

    res.push(
      <Collapse key={q.$xpath} in={calculations.relevant} unmountOnExit>
        <Box>
          {(() => {
            switch (q.type) {
              case 'begin_group': {
                return (
                  <GroupLayout {...layout}>
                    <Questions survey={q.children} path={path}/>
                  </GroupLayout>
                )
              }
              case 'begin_repeat': {
                const repeated = engine.eval(q.repeat_count)
                let depth = 1
                const subQuestions: QuestionGrouped[] = []
                i++
                while (depth > 0) {
                  subQuestions.push(survey[i])
                  if (survey[i].type === 'begin_repeat') depth++
                  else if (survey[i].type === 'end_repeat') depth--
                  i++
                }
                return repeated === 0 ? <></> :
                  mapFor(repeated, i => (
                    <RepeatLayout index={i} key={i} {...layout}>
                      <Questions
                        path={path.add({index: i, repeatGroupName: q.name})}
                        key={i}
                        survey={subQuestions}
                      />
                    </RepeatLayout>
                  ))
              }
              default: {
                return (
                  <Question q={q} path={path} calculations={calculations} layout={layout}/>
                )
              }
            }
          })()}
        </Box>
      </Collapse>
    )
  }
  return res
}