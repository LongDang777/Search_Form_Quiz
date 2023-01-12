import React from 'react'

export default function MultiQuetion({ answers, number, checkAns }) {

  return (
    <>
      {
        answers.map(({ id, content, exact }) => (
          <div key={id} className="col-6">
            <div className="custom-control custom-radio">
              <input
                type="radio" id={`multi${number}-mulAnswer${id}`}
                className="custom-control-input"
                name={`multi-${number}`}
                value={`${content}`}
                onChange={(e) => checkAns(e, exact, content)}
              />
              <label className="custom-control-label" htmlFor={`multi${number}-mulAnswer${id}`}>{content}</label>
            </div>
          </div>
        ))
      }
    </>
  )
}
