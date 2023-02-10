import React, { Fragment, useState } from 'react'

export default function InputPasswordSignUp({ register, errors }) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>

      <div className="input-field">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          {...register && register('password', {
            defaultValue: '',
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
              message: "Password must contain at least 1 uppercase letter, 1 number and 1 special character"
            },

          })}
        />
        <i className='bx bx-lock-alt' />
        <span
          className="icon-eye"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <i className='bx bxs-show'></i> : <i className='bx bx-low-vision'></i>}
        </span>
      </div>
      {errors?.password && <span className='error'>{errors?.password?.message}</span>}
    </Fragment>
  )
}
