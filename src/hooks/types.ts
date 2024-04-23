/**
 * Interface for the props passed to the FetchApiHook component.
 */
export interface FetchApiHookProps {
  url: string
}

/**
 * Interface for the response data from the API.
 */
export interface ApiResponseProps {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

/**
 * Interface for the structure of the response data object.
 */
export interface GetDataProps {
  products: ApiResponseProps[]
}

/**
 * Interface for the initial state of the API-related data.
 */
export interface InitialStateProps {
  apiData: ApiResponseProps[] | null
  isLoading: boolean
  error: string | null
}

/**
 * Type for the action object used in the reducer function.
 * Defines various action types that can be dispatched to the reducer.
 */
export type ReducerAction =
| { type: 'FETCH_START' }
| { type: 'FETCH_SUCCESS'; payload: any }
| { type: 'FETCH_ERROR'; payload: string };