import { all } from 'redux-saga/effects';
import Auth from './Auth';
import clientsSaga from "./clientsSaga";


export default function* rootSaga(getState) {
  yield all([
    Auth(),
    clientsSaga(),
  ]);
}

