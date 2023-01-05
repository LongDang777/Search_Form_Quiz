import React from 'react'
import './badge.css'

export default function Badge(props) {
  return (
    <span className={`badge badge-${props.type}`}>
      {props.content}
    </span>
  )
}
