import todoSaga from './todos';
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://dummy-server.io/';

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
