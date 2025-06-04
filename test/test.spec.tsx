// XlsFormFiller.test.tsx
import {fireEvent, render, screen} from '@testing-library/react'
import {XlsFormFiller} from '../src/XlsFormFiller'
import {answersMpca} from './answers/answersMpca'
import {surveyMpca} from './survey/surveyMpca'

describe('XlsFormFiller', () => {
  it('submits answers correctly', () => {
    let output: any
    render(
      <XlsFormFiller
        survey={surveyMpca as any}
        answers={answersMpca[0]}
        onSubmit={_ => {
          output = _.answers
        }}
      />
    )
    fireEvent.click(screen.getByRole('button', {name: /submit/i}))
    expect(output).toMatchObject(answersMpca[0])
  })
})
