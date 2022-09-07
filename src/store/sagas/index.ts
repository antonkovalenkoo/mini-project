import { all, spawn } from "redux-saga/effects";
import { articleSaga } from "./articles";
import { authSaga } from "./auth";

export default function* rootSaga() {
  const sagas = [articleSaga, authSaga];

  yield all(sagas.map(saga => spawn(saga)));
}