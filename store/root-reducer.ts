import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
