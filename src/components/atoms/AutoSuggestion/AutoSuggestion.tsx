// React imports
import React from "react"
// Types imports
import { AutoSuggestionsProps } from "../AtomsTypes"

/**
 * Component to render an input field with auto-suggestion functionality.
 * @param suggestion The suggestion string to be displayed as a placeholder in the input field.
 * @returns JSX element representing the AutoSuggestion component.
 * TODO: We can use this component for suggestions what user is searching
 */
const AutoSuggestion = ({ suggestion }: AutoSuggestionsProps): JSX.Element => {
  return (
    <input type="text" placeholder={suggestion} />
  )
}

export default AutoSuggestion