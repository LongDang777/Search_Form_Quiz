import React, { useState } from 'react'
import FillInBlank from './FillInBlank'
import MultiQuetion from './MultiQuetion'

export default function QuestionList({ data }) {

  const [result, setResult] = useState({})
  const count = {
    exact: 0,
    wrong: 0
  }

  const showAns = () => {
    for (let ques in result) {
      result[ques] ? count.exact++ : count.wrong++
    }
    localStorage.setItem('result', JSON.stringify(count))
  }

  const checkAns = (e, exact, content) => {
    const { name, value, type } = e.target;
    const newValue = value.toLowerCase().trim();
    const newContent = content.toLowerCase().trim()

    if (type === 'radio') {
      if (exact) {
        setResult({ ...result, [name]: 1 })
      } else {
        setResult({ ...result, [name]: 0 })
      }
    }
    else {
      if (newContent === newValue) {
        setResult({ ...result, [name]: 1 })
      } else {
        setResult({ ...result, [name]: 0 })
      }
    }
  }

  return (
    <>
      {data?.map((question, index) => {
        const { id, questionType, content, answers } = question;

        const btnNext = () => {
          if (index < data.length - 1) {
            return <a href={`#quiz-${data[index + 1].id}`} className="quiz__btn quiz__next">NEXT</a>;
          } else {
            return <a href="#quizResult" className="quiz__btn quiz__next" onClick={showAns}>SUBMIT</a>;
          }
        }

        return (
          <div key={id} className="quizSection" id={`quiz-${id}`}>
            <div className="quiz__main">
              <div className="quiz__header">
                <p>{content}</p>
              </div>
              <div className="quiz__body row">
                {questionType === 1
                  ? <MultiQuetion number={id} answers={answers} checkAns={checkAns} />
                  : <FillInBlank number={id} answers={answers} checkAns={checkAns} />}
              </div>
              <div className="quiz__footer">
                <p className="quiz__current">{`Question ${id} of ${data.length}`}</p>
                {btnNext()}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
