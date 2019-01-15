import * as TodoActionTpyes from './todoActionTypes';
import axios from 'axios';
import { BaseUrl } from '../config/common ';

export function getAllTodoStart(newTodoItem) {
  return dispatch => {
    axios.get(`${BaseUrl}/todos`).then(
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
    type: TodoActionTpyes.GET_ALL_TODOS_SUCCESS,
    payload: data
  };
};
const getAllTodoFailure = error => {
  return {
    type: TodoActionTpyes.GET_ALL_TODOS_FAILURE,
    payload: error
  };
};
