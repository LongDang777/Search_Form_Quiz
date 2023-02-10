import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Answer from './Answer'
import QuestionList from './QuestionList'
import './style.css'

const url = 'https://questiton-online.vercel.app/all'

export default function Quiz() {

  document.title = 'Quiz Question'

  const [showAns, setShowAns] = useState(true)


  const res = useFetch(url)
  const data = res?.response;

  return (
    <div id='mainApp'>
      <h1>Quiz Question</h1>
      <div id='quizlist'>
        {showAns ? <QuestionList data={data} setShowAns={setShowAns} /> : <Answer length={data?.length} />}
      </div>
    </div>
  )
}
