import React from 'react'
import QuestionList from './QuestionList'
import './style.css'

export default function Quiz() {

  return (
    <>
    <div id='mainApp'>
      <h1>Quiz Question</h1>
      <div id='quizlist'>
        <QuestionList/>
      </div>
    </div>
    <div className="quizResult">

    </div>
    </>
  )
}
