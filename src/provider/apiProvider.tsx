// React imports
import React, { useReducer } from 'react'
// Hooks imports
import { initialState, reducer } from '../reducers/reducer'
// Context imports
import { ApiContext } from '../context/ApiDataContext'
// Types imports
import { ChildrenProps } from '../config/SharedTypes'
// Constants imports
import { constants } from '../config/constants'

/**
 * Component responsible for providing API-related state and functions to its children components.
 * @param children The child components to be wrapped by the ApiProvider.
 * @returns JSX element representing the ApiProvider component.
 */
const ApiProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (title: string) => {
    // Check if title is not empty
    if (title.trim() === '') {
      dispatch({ type: 'FETCH_SUCCESS', payload: [] })
      return; // Do nothing if title is empty
    }
    dispatch({ type: 'FETCH_START' })
    try {
      // Fetch all products
      const response = await fetch(`${constants.backend.baseUrl}${constants.backend.endpoints.getProducts}`)
      const data = await response.json()

      // Filter products based on title
      const filteredData = data.filter((product: { title: string }) => {
        return product.title.toLowerCase().startsWith(title.toLowerCase())
      })

      dispatch({ type: 'FETCH_SUCCESS', payload: filteredData })
    } catch (error: any) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message })
    }
  }

  return <ApiContext.Provider value={{ state, fetchData }}>{children}</ApiContext.Provider>
}

export default ApiProvider