import { useContext } from "react"
import { ApiContext } from "../context/ApiDataContext"

/**
 * Custom hook to access the API context value.
 * @returns The API context value containing state and fetchData function.
 * @throws Error if used outside of an ApiProvider.
 */
const useApiContext = () => {
  const context = useContext(ApiContext)
  if (!context) {
    throw new Error('Something went wrong in useApiContext')
  }
  return context
}

export { ApiContext, useApiContext }