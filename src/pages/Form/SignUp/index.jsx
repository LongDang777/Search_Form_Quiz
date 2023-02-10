import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import sucessImg from "../../../asset/images/messageSucess.png";
import loading from "../../../asset/images/loadingGif.gif";
import SocialMedia from '../SocialMedia';
import InputEmailSignIn from './InputEmailSignUp';
import InputPasswordSignUp from './InputPasswordSignUp';
import InputUserSignIn from './InputUserSignUp';


export default function SignUp({ addClassMode }) {

  const [localData, setLocalData] = useState([]);
  const [submit, SetSubmited] = useState(false);

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('formData')) || []);
  }, [submit]);

  const { reset, setValue, setFocus, register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = data => {
    const newData = [...localData, data]
    SetSubmited(loading)
    setTimeout(() => {
      SetSubmited(true)
    }, 700)
    localStorage.setItem("formData", JSON.stringify(newData));
    reset({ username: '', email: '', password: '' })
  };

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
              <button className="btn" onClick={() => { addClassMode(); setTimeout(() => SetSubmited(false), 1000) }} id="sign-up-btn">
                Sign up
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
        <form onSubmit={handleSubmit(onSubmit)}
          className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <InputUserSignIn errors={errors} register={register} localData={localData} setValue={setValue} setFocus={setFocus} />
          <InputEmailSignIn errors={errors} register={register} localData={localData} setValue={setValue} setFocus={setFocus} />
          <InputPasswordSignUp errors={errors} register={register} setValue={setValue} setFocus={setFocus} />
          <input type="submit" value="Register" className="btn solid" />
          <p className="social-text">Or sign up with social platforms</p>
          <SocialMedia />
        </form>
      )}
    </Fragment>
  )
}
