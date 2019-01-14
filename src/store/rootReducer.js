import { combineReducers } from 'redux';
import routerReducer from 'react-router-redux';
import TodoReducer from '../todoManagement/todoReducer';

const rootReducer = combineReducers({
  routerReducer,
  todoItems: TodoReducer
});

export default rootReducer;
