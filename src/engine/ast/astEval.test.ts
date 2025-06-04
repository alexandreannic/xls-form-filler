import {AstFormEvaluator} from './astEval.ts'

describe('astEval', () => {
  describe('preprocessedFormula', () => {
    it.only('Case 1', () => {
      const ast = (new AstFormEvaluator({} as any) as any)
      const res = ast.preprocessedFormula('if(${occupation}=\'1\' or ${safe_shelter}=\'1\', 1,0)')
      expect(res).toEqual('if(occupation==\'1\' || safe_shelter==\'1\', 1,0)')
    })
  })
})