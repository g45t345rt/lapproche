import React from 'react'

type StepsProps = {
  prefix?: string
  titles: string[]
  choices: string[]
  onComplete: (answers: number[]) => void
}

export default (props: StepsProps) => {
  const [step, setStep] = React.useState(0)
  const [answers, setAnswers] = React.useState([])
  const { prefix, titles, choices, onComplete } = props

  const goback = React.useCallback(() => {
    if (step > 0) setStep(step - 1)
  }, [step])

  const choose = React.useCallback((answer) => {
    if (answers[step]) {
      answers[step] = answer
      setAnswers(answers)
    }
    else setAnswers([...answers, answer])

    if (step >= titles.length - 1) return
    setStep(step + 1)
  }, [step, answers])

  React.useEffect(() => {
    if (step >= titles.length - 1) onComplete(answers)
  }, [answers])

  const title = titles[step]
  return <div className="grid-row">
    <h1>{prefix}</h1>
    <h2 className="choice-title">{title}</h2>
    <div className="grid-row">
      {choices.map((choice, index) => {
        const point = Math.abs(index - choices.length + 1)
        return <button type="button" className="choice-button" key={index} onClick={() => choose(index)}>{choice} - {point}</button>
      })}
    </div>
    <button type="button" className="button" onClick={goback}>Retour</button>
  </div>
}
