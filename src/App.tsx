// React imports
import { ChangeEvent, useState } from 'react'
// Atoms imports
import Input from './components/atoms/Input/Input'
// Molecules imports
import Dropdown from './components/molecules/Dropdown/Dropdown'
// Context imports
import { useApiContext } from './hooks/useApiContext'

/**
 * Main component of the application responsible for rendering UI and managing user interactions.
 * @returns JSX element representing the App component.
 */
const App = () => {
  const { state } = useApiContext()
  const { fetchData } = useApiContext()
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Event handler function called when the input value changes.
   * Updates the search term state and fetches data based on the new search term.
   * @param event The event object representing the input change event.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    fetchData(event.target.value)
  }

  return (
    <div className="wrapper">
      <div className='input-wrapper'>
        <Input
          type='text'
          placeholder='Search Products'
          onChangeHandler={(event) => handleChange(event)} />
        <span>{state.isLoading ? <>Fetching...</> : ''}</span>
      </div>
      {state.apiData?.length ? <div className="dropdown">
        <Dropdown searchTerm={searchTerm} />
      </div> : null}
    </div>
  )
}

export default App
