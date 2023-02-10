import React, { Fragment } from 'react'

export default function InputUser({ handleOnchange ,register, errors, setValue, setFocus, }) {

  return (
    <Fragment>
      <div className="input-field">
        <input
          type='text'
          name="username"
          placeholder="Username"
          {...register && register('username', {
            defaultValue: '',
            onChange: handleOnchange,
            required: "Username is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Username must be a valid string"
            },
          })}
        />
        <i className='bx bx-user' />
        <i className="bx bx-x"
          onClick={() => {
            setValue('username', '')
            setFocus('username')
          }}
        >
        </i>
      </div>
      {errors?.username && <span className='error'>{errors?.username?.message}</span>}
    </Fragment>
  )
}
