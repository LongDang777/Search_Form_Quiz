
import React, { useEffect, useState } from 'react'
export default function Answer({ length }) {

  const [result, setResult] = useState()

  let rate = (result?.exact * 100) / length

  const value = JSON.parse(localStorage.getItem('result')) || {};

  useEffect(() => {
    value && setResult(value);
  }, [value?.exact])

  return (
    <div id="quizResult">
      <div className="quizSection">
        <div className="quiz__main">
          <div className="quiz__header">
            <p>Your Results:</p>
          </div>
          <div className="quiz__body row">
            <div className="col-6">
              <p className="score">{rate || 0} %</p>
            </div>
            <div className="col-6">
              <p><i className="material-icons text-success">check</i>Correct: {result?.exact || 0}  </p>
              <p><i className="material-icons text-danger">close</i>Incorrect: {length - result?.exact || 0}</p>
            </div>
          </div>
          <div className="quiz__footer text-center">
            <a id="testAgain" href="/quiz" className="quiz__btn">Test Again</a>
          </div>
        </div>
      </div>
    </div>

  )
}
