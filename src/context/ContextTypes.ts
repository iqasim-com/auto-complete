// Reducer imports
import { initialState } from "../reducers/reducer"

export interface ContextProps {
  state: typeof initialState
  fetchData: (title: string) => void
}