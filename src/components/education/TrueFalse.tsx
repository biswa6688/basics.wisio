import { MultipleChoice } from './MultipleChoice'

export function TrueFalse({ statement, isTrue, explanation }: { statement: string; isTrue: boolean; explanation?: string }) {
  return (
    <MultipleChoice
      question={statement}
      options={['True', 'False']}
      correctIndex={isTrue ? 0 : 1}
      explanation={explanation}
    />
  )
}
