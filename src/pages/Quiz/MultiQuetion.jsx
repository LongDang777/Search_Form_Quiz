import React from 'react'

export default function MultiQuetion({ answers, number }) {

  const checkAns = () =>{
    
  }

  return (
    <>
      {
        answers.map(({ id, content }) => (
          <div key={id} class="col-6">
            <div class="custom-control custom-radio">
              <input type="radio" id={`multi${number}-mulAnswer${id}`} name={`multi-${number}`} class="custom-control-input" value={`${content}`} />
              <label class="custom-control-label" for={`multi${number}-mulAnswer${id}`}>{content}</label>
            </div>
          </div>
        ))
      }
    </>
  )
}
