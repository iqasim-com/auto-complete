// React imports
import React from "react"
// Types imports
import { InputProps } from "../AtomsTypes"

const Input = ({ type, placeholder, onChangeHandler }: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  )
}

export default Input