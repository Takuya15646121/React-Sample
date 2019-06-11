import { fork } from 'redux-saga/effects';
import checkAuthentication from './firebaseSaga';

export default function* rootSaga() {
  yield fork(checkAuthentication);
}