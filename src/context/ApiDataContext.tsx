import { createContext, useContext } from 'react';
import { initialState } from '../reducers/reducer';

interface ContextProps {
  state: typeof initialState;
  fetchData: (title: string) => void;
}

const ApiContext = createContext<ContextProps | undefined>(undefined);

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};

export { ApiContext, useApiContext };