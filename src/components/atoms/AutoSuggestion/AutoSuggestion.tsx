// React imports
import React from "react"
// Types imports
import { AutoSuggestionsProps } from "../AtomsTypes"

const AutoSuggestion = ({ suggestion }: AutoSuggestionsProps): JSX.Element => {
  return (
    <input type="text" placeholder={suggestion} />
  )
}

export default AutoSuggestion