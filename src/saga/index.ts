import todoSaga from './todos';
import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://dummy-server.io/';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(todoSaga)]);
}
