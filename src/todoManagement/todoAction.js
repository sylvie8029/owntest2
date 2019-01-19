import * as TodoActionTpyes from './todoActionTypes';
import axios from 'axios';
import { BaseUrl } from '../config/common';

export function getAllTodoStart() {
  return dispatch => {
    axios.get(`${BaseUrl}/aaa`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllTodoSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllTodoFailure(err));
      }
    );
  };
}
const getAllTodoSuccess = data => {
  return {
    type: TodoActionTpyes.GET_ALL_TODO_SUCCESS,
    payload: data
  };
};
const getAllTodoFailure = error => {
  return {
    type: TodoActionTpyes.GET_ALL_TODO_FAILURE,
    payload: error
  };
};

export function addNewTodoStart(newTodoItem) {
  return dispatch => {
    axios.post(`${BaseUrl}/todos/`, newTodoItem).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewTodoSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewTodoFailure(err));
      }
    );
  };
}
const addNewTodoSuccess = data => {
  return {
    type: TodoActionTpyes.ADD_NEW_TODO_SUCCESS,
    payload: data
  };
};
const addNewTodoFailure = error => {
  return {
    type: TodoActionTpyes.ADD_NEW_TODO_FAILURE,
    payload: error
  };
};
export function deleteTodoStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/todos/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteTodoSuccess(id));
        }
      },
      err => {
        dispatch(deleteTodoFailure(err));
      }
    );
  };
}
const deleteTodoSuccess = id => {
  return {
    type: TodoActionTpyes.DELETE_TODO_SUCCESS,
    payload: id
  };
};
const deleteTodoFailure = error => {
  return {
    type: TodoActionTpyes.DELETE_TODO_FAILURE,
    payload: error
  };
};
export function updateTodoStart(id, newItem) {
  return dispatch => {
    axios.put(`${BaseUrl}/todos/${id}/`, newItem).then(
      res => {
        if (res.status === 200) {
          dispatch(updateTodoSuccess(id));
        }
      },
      err => {
        dispatch(updateTodoFailure(err));
      }
    );
  };
}
const updateTodoSuccess = data => {
  return {
    type: TodoActionTpyes.UPDATE_TODO_SUCCESS,
    payload: data
  };
};
const updateTodoFailure = error => {
  return {
    type: TodoActionTpyes.UPDATE_TODO_FAILURE,
    payload: error
  };
};

export default {
  getAllTodoStart,
  addNewTodoStart,
  deleteTodoStart,
  updateTodoStart
};
