import React from 'react'
import logo from '../../asset/images/logo.svg';
import registerImg from '../../asset/images/register.svg';

export default function PanelContainer({ addClassMode = () => { } }) {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eos!</p>
          <button className="btn transparent" onClick={addClassMode}>Sign up</button>
        </div>

        <img src={logo} className='image' alt="logo" />
      </div>

      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat necessitatibus nulla aut.</p>
          <button className="btn transparent" onClick={addClassMode}>Sign in</button>
        </div>

        <img src={registerImg} className='image' alt="register" />
      </div>
    </div>
  )
}
