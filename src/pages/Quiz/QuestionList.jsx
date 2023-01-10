import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import FillInBlank from './FillInBlank'
import MultiQuetion from './MultiQuetion'

const url = 'https://questiton-online.vercel.app/all'

export default function QuestionList() {

  const res = useFetch(url)
  const data = res.response

  let quesList = [];
  let count = 0;

  const showAns = () => {

  }

  return (
    <>
      {data?.map((question, index) => {
        const { id, questionType, content, answers } = question;
        count++;

        const btnNext = () => {
          if (index < data.length - 1) {
            return <a href={`#quiz-${data[index + 1].id}`} class="quiz__btn quiz__next">NEXT</a>;
          } else {
            return <a href="#quizResult" class="quiz__btn quiz__next" onclick={showAns}>SUBMIT</a>;
          }
        }

        return (
          <div className='quizSection' id={`quiz-${id}`}>
            <div class="quiz__main">
              <div class="quiz__header">
                <p>{content}</p>
              </div>
              <div class="quiz__body row">
                {questionType === 1
                  ? <MultiQuetion number={id} answers={answers} />
                  : <FillInBlank number={id} answers={answers} />}
              </div>
              <div class="quiz__footer">
                <p class="quiz__current">{`Question ${count} of ${data.length}`}</p>
                {btnNext()}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
