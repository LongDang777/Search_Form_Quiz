import React, { useState } from 'react'

export default function FormInput(props) {

  const { label, onChange, resetValue, name, values, errorMessage, ...propsInput } = props

  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)

  return (
    <div id="form-item">
      <label>{label}</label>
      <input
        {...propsInput}
        name={name}
        onChange={onChange}
        value={values[name]}
        onFocus={() => {
          name === 'confirmPassword' && setFocused(true)
        }}
        focused={focused.toString()}
        onBlur={handleFocus}
      />
      <i className='bx bx-x' onClick={() => resetValue(name)} />
      <small>{errorMessage}</small>
    </div>
  )
}



// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);
//   const { label, errorMessage, onChange, id, ...inputProps } = props;

//   const handleFocus = (e) => {
//     setFocused(true);
//   };

//   return (
//     <div className="formInput">
//       <label>{label}</label>
//       <input
//         {...inputProps}
//         onChange={onChange}
//         onBlur={handleFocus}
//         onFocus={() =>{
//           inputProps.name === "confirmPassword" && setFocused(true)
//         }}
//         focused={focused.toString()}
//       />
//
//     </div>
//   );
// };

