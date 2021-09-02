import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  EDIT_TODOS_FAILURE,
  EDIT_TODOS_REQUEST,
  EDIT_TODOS_SUCCESS,
  REMOVE_TODOS_FAILURE,
  REMOVE_TODOS_REQUEST,
  REMOVE_TODOS_SUCCESS,
  TOGGLE_TODOS_FAILURE,
  TOGGLE_TODOS_REQUEST,
  TOGGLE_TODOS_SUCCESS,
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

function addTodoAPI(data: void) {
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
        isCheck: false,
        createdAt: date,
      },
    });
  } catch (err) {
    yield put({
      type: ADD_TODOS_FAILURE,
    });
  }
}

function toggleTodoAPI(data: void) {
  return axios.patch(`todo/${data}/toggle`);
}

function* toggleTodo(action: any) {
  try {
    //const result = yield call(toggleTodoAPI,action.data)
    yield delay(100);
    yield put({
      type: TOGGLE_TODOS_SUCCESS,
      id: action.id,
    });
  } catch (err) {
    yield put({
      type: TOGGLE_TODOS_FAILURE,
    });
  }
}

function editTodoAPI(data: void) {
  return axios.patch(`todo/${data}`);
}

function* editTodo(action: any) {
  try {
    //const result = yield call(editTodoAPI,action.data)
    yield delay(300);
    yield put({
      type: EDIT_TODOS_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_TODOS_FAILURE,
    });
  }
}

function removeTodoAPI(data: void) {
  return axios.delete(`/todo/${data}`);
}

function* removeTodo(action: any) {
  try {
    //const result = yield call(removeTodoAPI,action.data)
    yield delay(700);
    yield put({
      type: REMOVE_TODOS_SUCCESS,
      id: action.id,
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

function* watchToggleTodo() {
  yield takeLatest(TOGGLE_TODOS_REQUEST, toggleTodo);
}

function* watchEditTodo() {
  yield takeLatest(EDIT_TODOS_REQUEST, editTodo);
}

export default function* todoSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([
    fork(watchAddTodo),
    fork(watchRemoveTodo),
    fork(watchToggleTodo),
    fork(watchEditTodo),
  ]);
}
