import React from 'react'

import ProgressSteps from '../ProgressSteps'

import './index.sass'

type Choice = {
  text: string
  value: number
}

type StepsProps = {
  prefix?: string
  titles: string[]
  choices: Choice[]
  onComplete: (answers: number[]) => void
}

export default (props: StepsProps) => {
  const [step, setStep] = React.useState(0)
  const [answers, setAnswers] = React.useState([])
  const { prefix, titles, choices, onComplete } = props
  const titleRef = React.useRef()

  const goback = React.useCallback(() => {
    if (step > 0) setStep(step - 1)
  }, [step])

  const choose = React.useCallback((answer) => {
    const title = titleRef.current
    title.classList.add('pop')
    if (answers[step]) {
      answers[step] = answer
      setAnswers(answers)
    }
    else setAnswers([...answers, answer])

    //if (step >= titles.length - 1) return
    setStep(step + 1)
  }, [step, answers])

  React.useEffect(() => {
    if (step <= titles.length - 1) return
    //setTimeout(() => onComplete(answers), 1000)
    onComplete(answers)
  }, [answers])

  React.useEffect(() => {
    const title = titleRef.current
    title.addEventListener('webkitAnimationEnd', () => {
      title.classList.remove('pop')
    })
  }, [])

  const title = titles[step]
  return <div className="grid-row">
    <h1>{prefix}</h1>
    <h2 ref={titleRef} className="steps-title">{title}</h2>
    <ProgressSteps steps={titles.length} currentStep={step} />
    <div className="grid-row">
      {choices.map((choice, index) => {
        const { text, value } = choice

        return <button type="button" className="steps-button" key={index} onClick={() => choose(value)}>
          <div className="text">{text} - {value}</div>
        </button>
      })}
    </div>
    <button type="button" className="button" onClick={goback}>Retour</button>
  </div>
}
