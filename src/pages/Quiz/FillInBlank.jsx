import React from 'react'

export default function FillInBlank({number, answers}) {
  return (
    <div class="col-12">
      <textarea class="form-control" id={`fill${number}-fillAnswer${answers[0].id}`} rows="3"></textarea>
    </div>
  )
}
