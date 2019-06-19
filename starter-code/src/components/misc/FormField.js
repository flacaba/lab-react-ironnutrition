import React from 'react'

const FormField = (props) => {
  const {
    label,
    name,
    onBlur,
    value,
    onChange,
    touch,
    error,
    validationClassName,
    inputType
  } = props

  console.log(validationClassName)

  const inputAttrs = {
    autoComplete : "off",
    className : ` form-control ${validationClassName}`,
    name,
    onBlur,
    value,
    onChange,
    type: inputType
  }


  return (
    <div className = "form-group">
      <label><b>{label}</b></label>
      <input {...inputAttrs} ></input>

      { touch && !error && (
        <div className="valid-feedback">
          Looks good!
        </div>
      )}

      { touch && error && (
        <div className="invalid-feedback">
          Invalid field
        </div>
      )}
    </div>
  )
}

export default FormField