import React, { useState } from "react";
import FormInput from "./FormInput";
import "./style.css";
import { ReactComponent as Check } from '../../asset/images/check.svg'
import loadingGif from '../../asset/images/loading.gif'
import { useRouteMatch } from "react-router-dom";

export default function FormMain() {

  const inputValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: false,
    loading: false,
  }

  const match = useRouteMatch()

  const [values, setValues] = useState(inputValue)


  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username...",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email...",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password...",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password...",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    setTimeout(() => {
      setValues({ ...values, loading: false, message: true });
    }, 1000)


  };

  const resetValue = (name) => {
    setValues({ ...values, [name]: "" });
  };

  const messageSucess = () => {
    return (
      <div className="form-content message">
        <Check className="check-icon" />
        <h3>Registration Success</h3>
        <button onClick={() => setValues(inputValue)}>Close</button>
      </div>
    )
  }

  return (
    <div className="form-container">
      <h2>Registration</h2>
      {(values.loading && <img className="loadingGif" src={loadingGif} alt="" />) ||
        (values.message && messageSucess())
        || <div className="form-content">
          <form onSubmit={handleSubmit} id="form">
            <h3>Sign up</h3>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                onChange={onChange}
                resetValue={resetValue}
                values={values}
                {...input}
              />
            ))}
            <div className="btn">
              <button className="btn-submit">Register</button>
            </div>
          </form>
        </div>}
    </div>
  );
}
