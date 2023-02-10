import React, { Fragment, useState } from 'react'

export default function InputPassword({ username, register, errors, setValue, setFocus, handleOnchange }) {

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
