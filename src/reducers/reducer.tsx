// Types imports
import { InitialStateProps, ReducerAction } from "../hooks/types"
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "./actionTypes"

/**
 * Defined initial state
 */
export const initialState: InitialStateProps = {
  apiData: null,
  isLoading: false,
  error: null,
}

/**
 * Reducer function responsible for managing the state related to API fetching.
 * @param state The current state object containing API-related data.
 * @param action The action object dispatched to the reducer.
 * @returns The new state object after applying the specified action.
 */
export const reducer = (state: InitialStateProps, action: ReducerAction): InitialStateProps => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isLoading: true, error: null }
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, apiData: action.payload }
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
