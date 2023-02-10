import React, { Fragment, useState } from 'react'
import SocialMedia from '../SocialMedia'
import InputUser from './InputUser';
import sucessImg from "../../../asset/images/messageSucess.png";
import loading from "../../../asset/images/loadingGif.gif";
import { useForm } from 'react-hook-form';
import InputPassword from './InputPassword';


export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [submit, SetSubmited] = useState(false);

  const { reset, clearErrors, setError, setValue, setFocus, register, handleSubmit, formState: { errors }, } = useForm({ mode: 'onSubmit' });

  const checkPass = (data, storedData) => {
    const checkPass = storedData.find(store => {
      return data.username === store.username && data.password === store.password
    });
    if (!checkPass) {
      return setError('password', {
        message: 'Incorrect password. please try again.'
      })
    }
    clearErrors('password')
    return true;
  }

  const usernameIsExits = (data, storedData) => {
    const existingUsername = storedData.find(
      user => data.username === user.username
    );
    if (!existingUsername) {
      return setError('username', {
        message: "Username don't exist."
      })
    }
    clearErrors('username')
    return true;
  }

  const onSubmit = data => {
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (!storedData) {
    
      return setError('username', {
        message: "Username don't exist. Please Sign up"
      })
    }

     if (storedData && usernameIsExits(data, storedData) && checkPass(data, storedData)) {
      SetSubmited(loading)
      setTimeout(() => {
        SetSubmited(true)
      }, 700);
      reset({ 'password': '', 'username': '' })
    }
  };
  const handleOnchange = (e) => {
    setFormData({ ...formData, username: e.target.value })
  }

  const MessageSucess = () => {
    return (
      <div className="success">
        {submit === loading ? (
          <img className="loading" src={loading} alt="" />
        ) : (
          <Fragment>
            <img src={sucessImg} alt="" />
            <div>
              <button
                className="btn btn-close"
                onClick={() => SetSubmited(false)}
              >
                Close
              </button>
            </div>
          </Fragment>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      {submit ? (
        <MessageSucess />
      ) : (
        <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Sign in</h2>
          <InputUser
            handleOnchange={handleOnchange}
            errors={errors}
            setValue={setValue}
            setFocus={setFocus}
            register={register}
          />
          <InputPassword
            errors={errors}
            setValue={setValue}
            setFocus={setFocus}
            register={register}
          />
          <input
            type="submit"
            value="Login"
            className="btn solid"
          />
          <p className="social-text">Or sign in with social platforms</p>
          <SocialMedia />
        </form>
      )}
    </Fragment>
  )
}
