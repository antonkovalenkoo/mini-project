import {
  IGetArticle,
  IGetArticles,
  IGetArticlessSuccess,
  IGetArticleSuccess,
  ISignIn,
  ISignInFail,
  ISignInSuccess,
  ISignUp,
  ISignUpSuccess,
} from './interfaces'

export type ArticlesActionType =
  | IGetArticles
  | IGetArticlessSuccess
  | IGetArticle
  | IGetArticleSuccess

export type AuthActionType = ISignIn | ISignInSuccess | ISignInFail | ISignUpSuccess | ISignUp
