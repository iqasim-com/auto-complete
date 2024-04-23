import { ChangeEvent } from "react"

/**
 * Defined all Atoms components prop types here
 */
export interface InputProps {
  type: string,
  placeholder?: string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  value?: string
}

export interface ListProps {
  title: React.ReactNode
}

export interface AutoSuggestionsProps {
  suggestion: string
}