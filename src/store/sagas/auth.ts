import { fork, put, select, StrictEffect, takeEvery } from "redux-saga/effects"
import { RootState } from ".."
import { signInFailAction, signInSuccessAction } from "../auth/action"
import { AuthActionEnum } from "../types"

const getAuthState = (state: RootState) => state.auth

function* watchAuth(): Generator<StrictEffect> {
  yield takeEvery(AuthActionEnum.SIGN_IN, authWorker)
}

function* authWorker() {
  const state: ReturnType<typeof getAuthState> = yield select(getAuthState)

  if (state.username === state.enteredUsername 
    && state.password === state.enteredPassword
  ) {
    yield put(signInSuccessAction())
  } else {
    yield put(signInFailAction())
  }
}

export function* authSaga() {
  yield fork(watchAuth)
}