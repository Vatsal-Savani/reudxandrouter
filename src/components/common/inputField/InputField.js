import React from 'react'
import "./InputField.css"

const InputField = ({ value, name, placeHolder, type = "text", onChange, className }) => {
    return (
        <input value={value} name={name} className={`input-field ${className}`} type={type} placeholder={placeHolder} onChange={onChange} />
    )
}

export default InputField