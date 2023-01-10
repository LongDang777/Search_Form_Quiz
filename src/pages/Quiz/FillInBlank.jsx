import React from 'react'

export default function FillInBlank({ number, answers ,checkAns }) {

  return (
    <div className="col-12">
      <textarea
        name={`multi-${number}`}
        className="form-control"
        id={`fill${number}-fillAnswer${answers[0].id}`}
        rows="3"
        onChange={(e) => checkAns(e, answers.exact, answers[0].content)}
        >
      </textarea>
    </div>
  )
}
