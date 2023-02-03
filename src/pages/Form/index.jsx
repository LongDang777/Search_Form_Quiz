/* eslint-disable no-cond-assign */
import React, { Fragment, useState } from "react";
import { ReactComponent as Check } from '../../asset/images/check.svg';
import logo from '../../asset/images/logo.svg';
import registerImg from '../../asset/images/register.svg';
import "./style.css";
import { useForm } from 'react-hook-form';
import sucessImg from '../../asset/images/messageSucess.png'
import loading from '../../asset/images/loading.webp'
import { signUpInputs, social_media } from "../../utils/constans";

export default function Form() {

  document.title = 'Registration'
  const [mode, setMode] = useState(true)
  const [dataUser, setDataUser] = useState(localStorage.getItem('dataUser')
    ? JSON.parse(localStorage.getItem('dataUser'))
    : [])

  const [submit, SetSubmited] = useState(false)

  const addClassMode = () => setMode(!mode)

  const { clearErrors, setError, reset, setValue, register, handleSubmit, formState: { errors } } = useForm({ mode: 'onchange' });
  const handleErrorItem = (name, value, error) => {
    for (let i = 0; i < dataUser.length; i++) {
      if (dataUser[i][name] === value) {
        return setError(error, {
          message: `${name} already exists`
        })
      }
      (i === dataUser.length - 1) && clearErrors(error)
    }
  }

  const handleOnchange = (e, error) => {
    const { name, value } = e.target
    name === 'userName' && handleErrorItem(name, value, error);
    name === 'email' && handleErrorItem(name, value, error);
  }

  const onSubmit = (data) => {
    const newDataUser = [...dataUser, data]
    setDataUser(newDataUser)
    localStorage.setItem('dataUser', JSON.stringify(newDataUser))
    SetSubmited(loading)
    setTimeout(() => {
      SetSubmited(true)
    }, 700)
    reset({ userName: '', email: '', password: '' })
  }

  const MessageSucess = () => {
    return (
      <div className="success">
        {submit === loading ?
          <img className="loading" src={loading} alt="" />
          : (<Fragment>
            <img src={sucessImg} alt="" />
            <div>
              <button className="btn btn-close" onClick={() => SetSubmited(false)}>Close</button>
              <button className="btn" onClick={addClassMode} id="sign-up-btn">Sign up</button>
            </div>
          </Fragment>)
        }
      </div>
    )
  }

  const PanelContainer = () => {
    return (
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eos!</p>
            <button className="btn transparent" onClick={addClassMode} id="sign-up-btn">Sign up</button>
          </div>

          <img src={logo} className='image' alt="logo" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat necessitatibus nulla aut.</p>
            <button className="btn transparent" onClick={addClassMode} id="sign-in-btn">Sign in</button>
          </div>

          <img src={registerImg} className='image' alt="register" />
        </div>
      </div>
    )
  }

  return (
    <div className={`container ${mode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">

          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <input type="text" placeholder="Username" />
              <i className="bx bx-user" />
              <i className='bx bx-x' />
            </div>
            <div className="input-field">
              <i className="bx bx-lock-alt" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or sign in with social platforms</p>
            <div className="social-media">
              {social_media.map(({ id, href, icon }) => (
                <a href={href} className="social-icon" key={id}>
                  <i className={icon} />
                </a>
              ))}
            </div>
          </form>

          {submit ? <MessageSucess /> : (
            <form
              onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
              <h2 className="title">Sign up</h2>

              {signUpInputs.map((input) => {
                const { id, name, placeholder, type, errorMessage, error, pattern, iconName, iconExit } = input;
                return <div key={id} className='input-content'>
                  <div className="input-field">
                    <input placeholder={placeholder} type = {type} 
                      {...register(`${name}`,
                        {
                          onChange: (e) => handleOnchange(e, error),
                          required: true,
                          pattern: {
                            value: pattern,
                            message: errorMessage
                          }
                        })}
                    />
                    <i className={iconName} />
                    {errors.userName && <i className={iconExit} onClick={() => setValue(name, '')} />}
                  </div>
                  {errors?.[`${name}`]?.type === "required" && <span className="errorMessage">This field is required</span>}
                  {errors?.[`${name}`]?.message && <span className="errorMessage">{errors?.[`${name}`]?.message}</span>}
                  {errors?.[`${error}`]?.message && <span className="errorMessage">{errors?.[`${error}`]?.message}</span>}
                </div>
              })}

              <input type="submit" value="Register" className="btn solid" />
              <p className="social-text">Or sign up with social platforms</p>
              <div className="social-media">
                {social_media.map(({ id, href, icon }) => (
                  <a href={href} className="social-icon" key={id}>
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
      <PanelContainer />
    </div>
  );
}
