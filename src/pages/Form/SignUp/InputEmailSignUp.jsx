import React, { Fragment } from 'react'

export default function InputEmailSignIn({ localData, register, errors, setValue, setFocus }) {

  const validateEmail = value => {
    const existingEmail = localData.find(
      data => data.email === value
    );

    if (existingEmail) {
      return 'This email is already taken';
    }

    return true;
  };

  return (
    <Fragment>
      <div className="input-field">
        <input
          name="email"
          placeholder="Email"
          {...register && register('email', {
            defaultValue: '',
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email must be a valid email address"
            },
            validate: value => validateEmail(value)
          })}
        />
        <i className='bx bx-envelope' />
        <i className="bx bx-x"
          onClick={() => {
            setValue('email', '')
            setFocus('email')
          }}
        >
        </i>
      </div>
      {errors?.email && <span className='error'>{errors?.email?.message}</span>}
    </Fragment>
  )
}
