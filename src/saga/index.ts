import todoSaga from './todos';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
