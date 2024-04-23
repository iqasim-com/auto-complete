export interface FetchApiHookProps {
  url: string
}
export interface ApiResponseProps {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export interface GetDataProps {
  products: ApiResponseProps[]
}

export interface InitialStateProps {
  apiData: ApiResponseProps[] | null
  isLoading: boolean
  error: string | null
}

export type ReducerAction =
| { type: 'FETCH_START' }
| { type: 'FETCH_SUCCESS'; payload: any }
| { type: 'FETCH_ERROR'; payload: string };