// React imports
import { createContext } from 'react'
// Types imports
import { ContextProps } from './ContextTypes'

// Created a new context with the specified context value type
export const ApiContext = createContext<ContextProps | undefined>(undefined)