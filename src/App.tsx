// React imports
import { useState } from 'react'
// Atoms imports
import Input from './components/atoms/Input/Input'
// Molecules imports
import Dropdown from './components/molecules/Dropdown/Dropdown'
// Context imports
import { useApiContext } from './context/ApiDataContext'

const App = () => {
  const { state } = useApiContext()
  const { fetchData } = useApiContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value)
    fetchData(e.target.value)
  }

  return (
    <div className="wrapper">
      <div className='input-wrapper'>
        <Input
          type='text'
          placeholder='Search TODOs'
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
