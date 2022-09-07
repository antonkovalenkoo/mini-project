import { AuthActionEnum, IAuthInitialStateProps, AuthActionType } from '../types'

const initialState: IAuthInitialStateProps = {
  isAuth: false,
  isLoading: false,
  username: 'admin123',
  password: 'admin123', 
  enteredUsername: '',
  enteredPassword: ''
}

export const AuthReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: AuthActionType
): IAuthInitialStateProps => {
  switch (action.type) {
    case AuthActionEnum.SIGN_IN:
      return {
        ...state, 
        isLoading: true,
        enteredUsername: action.payload.username,
        enteredPassword: action.payload.password
      }
    case AuthActionEnum.SIGN_IN_SUCCESS:
      return {
        ...state, 
        isLoading: false, 
        isAuth: true,
        enteredUsername: '',
        enteredPassword: ''
      }
    case AuthActionEnum.SIGN_IN_FAIL:
      return {
        ...state, 
        isLoading: false,
        enteredUsername: '',
        enteredPassword: ''
      }
    default:
      return state
  }
}
