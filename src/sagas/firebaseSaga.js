import { call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../firebase/firebase';
import { actionCreator } from '../actions/authenticationAction';

function authChannel() {
  const auth = firebase.auth()
  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    )
    return unsubscribe
  })
  return channel
}

export default function* checkAuthentication() {
  const channel = yield call(authChannel)
  while (true) {
    const { user, error } = yield take(channel)
    
    if (user && !error) {
        yield put(actionCreator.authSuccess(user));
    } else {
        yield put(actionCreator.authFailure());
    }
  }
}