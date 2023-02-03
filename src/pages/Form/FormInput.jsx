import React, { useState } from 'react'

export default function FormInput(props) {



  const { label, onChange, resetValue, name, values, errorMessage, icon,  ...propsInput } = props

  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)

  return (
    <div className="input-field">
      <input
        {...propsInput}
        name={name}
        onChange={onChange}
        value={values[name]}
        focused={focused.toString()}
        onBlur={handleFocus}
      />
      <i className={icon}></i>
      <i className='bx bx-x-circle' onClick={() => resetValue(name)} />
      <i className='bx bx-check'/>
      <small className='error-input'>{errorMessage}</small>
    </div>

  )
}


