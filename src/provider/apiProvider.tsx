// React imports
import React, { useEffect, useReducer, useState } from 'react'
// Hooks imports
import { initialState, reducer } from '../reducers/reducer'
// Context imports
import { ApiContext } from '../context/ApiDataContext'
// Types imports
import { ChildrenProps } from '../config/SharedTypes'
// Constants imports
import { constants } from '../config/constants'

/**
 * Provider component responsible for managing API data fetching and state management.
 * @param children The child components wrapped by the provider.
 * @returns JSX element representing the ApiProvider component.
 */
const ApiProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [data, setData] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // Fetch all products and save in local state
    fetch(`${constants.backend.baseUrl}${constants.backend.endpoints.getProducts}`)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  const fetchData = async (title: string) => {
    // Check if title is not empty
    if (title.trim() === '') {
      dispatch({ type: 'FETCH_SUCCESS', payload: [] })
      return; // Do nothing if title is empty
    }
    dispatch({ type: 'FETCH_START' })
    try {
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