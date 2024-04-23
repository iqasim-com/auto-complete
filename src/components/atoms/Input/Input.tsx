// React imports
import React from "react"
// Types imports
import { InputProps } from "../AtomsTypes"

/**
 * Component to render an input field with specified type, placeholder, and onChange event handler.
 * @param type The type of the input field (e.g., 'text', 'password', etc.).
 * @param placeholder The placeholder text to be displayed in the input field.
 * @param onChangeHandler The event handler function to be called when the input value changes.
 * @returns JSX element representing the Input component.
 */
const Input = ({ type, placeholder, onChangeHandler }: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  )
}

export default Input