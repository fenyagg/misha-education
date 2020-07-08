import { createContext } from 'react';
import { Store } from '../stores/store';

export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;
