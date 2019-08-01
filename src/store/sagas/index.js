import { all, takeLatest } from "redux-saga/effects";

export default function* rootSaga() {
  const list = [];

  // list.push(takeLatest(Login.REQUEST, Login.loginRequest));

  yield all([...list]);
}
