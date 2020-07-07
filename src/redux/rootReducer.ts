import { combineReducers } from 'redux';
import { usersReducer } from './user/usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
});
