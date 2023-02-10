import React, { Fragment, useEffect, useRef, useState } from 'react'
import FillInBlank from './FillInBlank'
import MultiQuetion from './MultiQuetion'
import loading from '../../asset/images/loadingGif.gif'

export default function QuestionList({ data, setShowAns }) {

  const [result, setResult] = useState({})
  const questionRef = useRef()
  const [currentQues, setCurrentQues] = useState(0)
  const [loading, setLoading] = useState(true)

  const resultAns = {
    exact: 0,
    wrong: 0
  }

  useEffect(() => {
    questionRef.current.style.transform = `translateY(${-currentQues * 100}%)`
  }, [currentQues])


  const showAns = () => {
    for (let ans in result) {
      result[ans] ? resultAns.exact++ : resultAns.wrong++
    }
    setTimeout(() => {
      setShowAns(prev => !prev)
    }, [1000])
    localStorage.setItem('result', JSON.stringify(resultAns))
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

  const nextQuestion = () => {
    setCurrentQues(ques => ques + 1)
  }

  let location = 0;

  return (
    <div className='question_content' ref={questionRef}>
      {data?.map((question, index) => {
        const { id, questionType, content, answers } = question;
        const btnNext = () => {
          if (index < data.length - 1) {
            return (
              <Fragment>
                <button className="quiz__btn quiz__next" onClick={nextQuestion}>NEXT</button>
              </Fragment>
            );
          } else {
            return <button href="#quizResult" className="quiz__btn quiz__next" onClick={showAns}>SUBMIT</button>;
          }
        }
        return (
          <div key={id} className="quizSection" id={`quiz-${id}`} style={{ bottom: `-${location++ * 100}%` }}>
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
    </div>
  )
}
