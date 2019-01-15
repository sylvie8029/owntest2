import * as TodoActionTypes from './todoActionTypes';

const initialState = {
  todoItems: []
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case TodoActionTypes.GET_ALL_TODO_START: {
      return { ...state };
    }
    case TodoActionTypes.GET_ALL_TODO_SUCCESS: {
      return { ...state, todoItems: action.payload };
    }
    case TodoActionTypes.GET_ALL_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case TodoActionTypes.ADD_NEW_TODO_SUCCESS: {
      return { ...state, todoItems: [...state.todoItems, action.payload] };
    }
    case TodoActionTypes.ADD_NEW_TODO_FAILURE: {
      return { ...state, error: action.payload };
    }
    case TodoActionTypes.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todoItems: state.todoItems.filter(item => item.id !== action.payload)
      };
    }
    case TodoActionTypes.DELETE_TODO_FAILURE: {
      return { ...state, error: action.payload };
    }
    case TodoActionTypes.UPDATE_TODO_SUCCESS: {
      const todos = state.todoItems.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, todos };
    }
    case TodoActionTypes.UPDATE_TODO_FAILURE: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
}
