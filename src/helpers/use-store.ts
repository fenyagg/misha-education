import { useContext } from 'react';
import { StoreContext } from './store-provider';
import { Store } from '../stores/store';

export const useStore = (): Store => useContext(StoreContext);
