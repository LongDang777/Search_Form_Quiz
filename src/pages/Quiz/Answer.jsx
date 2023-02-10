
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
export default function Answer({ length }) {

  const history = useHistory()

  const [result, setResult] = useState(localStorage.getItem('result') ? JSON.parse(localStorage.getItem('result')) : {} )

  let rate = (result?.exact * 100) / length

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
              <p className='text-success'><i className="bx bx-check"></i>Correct: {result?.exact || 0}  </p>
              <p className="text-danger"><i className='bx bx-x'></i>Incorrect: {length - result?.exact || 0}</p>
            </div>
          </div>
          <div className="quiz__footer text-center">
            <button onClick={() => history.go(0)} className="quiz__btn">Test Again</button>
          </div>
        </div>
      </div>
    </div>

  )
}
