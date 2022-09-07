import { IGetArticles, IGetArticlessSuccess, ISignIn, ISignInFail, ISignInSuccess } from './interfaces'

export type ArticlesActionType = IGetArticles | IGetArticlessSuccess

export type AuthActionType = ISignIn | ISignInSuccess | ISignInFail
