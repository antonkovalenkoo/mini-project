import { IGetArticles, IGetArticlessSuccess, ISignIn, ISignInFail, ISignInSuccess, ISignUp, ISignUpSuccess } from './interfaces'

export type ArticlesActionType = IGetArticles | IGetArticlessSuccess

export type AuthActionType = ISignIn | ISignInSuccess | ISignInFail | ISignUpSuccess | ISignUp
