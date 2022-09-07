import { fork, put, select, StrictEffect, takeEvery } from "redux-saga/effects"
import { RootState } from ".."
import { signInFailAction, signInSuccessAction, signUpSuccessAction } from "../auth/action"
import { AuthActionEnum } from "../types"

const getAuthState = (state: RootState) => state.auth

function* watchAuth(): Generator<StrictEffect> {
  yield takeEvery(AuthActionEnum.SIGN_IN, signInWorker)
  yield takeEvery(AuthActionEnum.SIGN_UP, signUpWorker)
}

function* signInWorker() {
  const state: ReturnType<typeof getAuthState> = yield select(getAuthState)

  if (state.username === state.enteredUsername 
    && state.password === state.enteredPassword
  ) {
    yield put(signInSuccessAction())
  } else {
    yield put(signInFailAction())
  }
}

function* signUpWorker() {
  const state: ReturnType<typeof getAuthState> = yield select(getAuthState)
  yield put(signUpSuccessAction({ 
    username: state.enteredUsername, 
    password: state.enteredPassword 
  }))
}

export function* authSaga() {
  yield fork(watchAuth)
}