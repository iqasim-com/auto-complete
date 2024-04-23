/**
 * Defined all Atoms components prop types here
 */
export interface InputProps {
  type: string,
  placeholder?: string,
  onChangeHandler: (e: any) => void,
  value?: string
}

export interface ListProps {
  title: any
}

export interface AutoSuggestionsProps {
  suggestion: string
}