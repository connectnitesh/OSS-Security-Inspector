import { combineReducers, Reducer } from 'redux';

import userReducer from './user';
import { RootState } from '../type';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  userState: userReducer,
});

export default rootReducer;
