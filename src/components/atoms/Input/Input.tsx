// React imports
import React from "react"
// Types imports
import { InputProps } from "../AtomsTypes"

const Input = ({ type, placeholder, onChangeHandler }: InputProps): JSX.Element => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler} />
    </div>
  )
}

export default Input