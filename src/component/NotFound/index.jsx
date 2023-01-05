import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NotFound() {

  const history = useHistory()

  return (
    <div>
      <button onClick={history.push("/")}>BACK HOME</button>
      <h2>Not Found</h2>
    </div>
  )
}
