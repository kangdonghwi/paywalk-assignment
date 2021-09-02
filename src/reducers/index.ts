import { combineReducers } from 'redux';
import todos from './todos';
//combineReducers를 함으로써 todos이외에도 분리시킨 리듀서를 합칠 수 있음.
export const rootReducer = combineReducers({
  todos,
});
