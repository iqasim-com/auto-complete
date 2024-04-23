// Reducer imports
import { initialState } from "../reducers/reducer"

/**
 * Interface defining the shape of the context value provided by the API context.
 * @property state The state object containing API-related data.
 * @property fetchData Function to fetch data from the API based on a given title.
 */
export interface ContextProps {
  state: typeof initialState
  fetchData: (title: string) => void
}