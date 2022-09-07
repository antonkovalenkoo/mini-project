import { AuthActionEnum } from '../types'
import { IAuthPayload } from '../types/interfaces'

export const signInAction = (payload: IAuthPayload) => ({
  type: AuthActionEnum.SIGN_IN,
  payload
})

export const signInSuccessAction = () => ({
  type: AuthActionEnum.SIGN_IN_SUCCESS
})

export const signInFailAction = () => ({
  type: AuthActionEnum.SIGN_IN_FAIL
})

export const signUpAction = (payload: IAuthPayload) => ({
  type: AuthActionEnum.SIGN_UP,
  payload
})

export const signUpSuccessAction = (payload: IAuthPayload) => ({
  type: AuthActionEnum.SIGN_UP_SUCCESS,
  payload
})
