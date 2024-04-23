// React imports
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import ApiProvider from './provider/apiProvider'

test('renders input element with correct attributes', () => {
  render(
    <ApiProvider>
      <App />
    </ApiProvider>
  )
  
  // Find the input element by its placeholder text
  const inputElement = screen.getByPlaceholderText('Search Products')
  
  // Assert that the input element is present in the component
  expect(inputElement).toBeInTheDocument()

  // Assert other attributes of the input element if needed
  expect(inputElement).toHaveAttribute('type', 'text')
})
