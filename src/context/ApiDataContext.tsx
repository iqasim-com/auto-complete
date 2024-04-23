// React imports
import { createContext, useContext } from 'react'
// Types imports
import { ContextProps } from './ContextTypes'

// Created a new context with the specified context value type
const ApiContext = createContext<ContextProps | undefined>(undefined)

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