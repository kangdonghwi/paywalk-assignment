import todoSaga from './todos';
import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://dummy-server.io/';
//분리시킨 saga들을 all로 합칠 수 있음
export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(todoSaga)]);
}
