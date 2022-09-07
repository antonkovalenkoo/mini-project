import { AuthActionEnum } from '../types'
import { ISignInPayload } from '../types/interfaces'

export const signInAction = (payload: ISignInPayload) => ({
  type: AuthActionEnum.SIGN_IN,
  payload
})

export const signInSuccessAction = () => ({
  type: AuthActionEnum.SIGN_IN_SUCCESS
})

export const signInFailAction = () => ({
  type: AuthActionEnum.SIGN_IN_FAIL
})
