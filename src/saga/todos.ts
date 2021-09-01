import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  REMOVE_TODOS_FAILURE,
  REMOVE_TODOS_REQUEST,
  REMOVE_TODOS_SUCCESS,
} from 'reducers/todos';
import axios from 'axios';
import {
  all,
  AllEffect,
  delay,
  fork,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';
import shortId from 'shortid';

function addTodoAPI(data: any) {
  return axios.post('/api/todo', data);
}

function* addTodo(action: any) {
  try {
    //const result = yield call(addTodoAPI,action.data)
    yield delay(700);
    const id = shortId.generate();
    const date = new Date().toDateString();
    yield put({
      type: ADD_TODOS_SUCCESS,
      data: {
        id,
        content: action.data,
        isCheck: true,
        createdAt: date,
      },
    });
  } catch (err: any) {
    yield put({
      type: ADD_TODOS_FAILURE,
      error: err.response.data,
    });
  }
}

function removeTodoAPI(data: any) {
  return axios.delete('/api/todo', data);
}

function* removeTodo(action: any) {
  try {
    //const result = yield call(removeTodoAPI,action.data)
    yield delay(700);
    yield put({
      type: REMOVE_TODOS_SUCCESS,
      data: action.data,
    });
  } catch (err: any) {
    yield put({
      type: REMOVE_TODOS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODOS_REQUEST, addTodo);
}

function* watchRemoveTodo() {
  yield takeLatest(REMOVE_TODOS_REQUEST, removeTodo);
}

export default function* todoSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(watchAddTodo), fork(watchRemoveTodo)]);
}
