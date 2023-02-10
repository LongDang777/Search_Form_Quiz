import React, { Fragment } from 'react'

export default function InputUserSignIn({ localData, register, errors, setValue, setFocus }) {

  const validateUsername = value => {
    const existingUsername = localData.find(
      data => data.username === value
    );
    if (existingUsername) {
      return 'This username is already taken';
    }
    return true;
  };

  return (
    <Fragment>

      <div className="input-field">
        <input
          type='text'
          name="username"
          placeholder="Username"
          {...register && register('username', {
            defaultValue: '',
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must have at least 3 characters"
            },
            maxLength: {
              value: 16,
              message: "Username cannot exceed 16 characters"
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Username must be a valid string"
            },
            validate: value => validateUsername(value)
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
