import { IArticleDate } from '../../models/interfaces'
import { ArticlesActionEnum, AuthActionEnum } from './enums'

export interface IArticlesInitialStateProps {
  articles: IArticleDate[]
  totalArticles: number
  articlePage: number
  limitPerPage: number
}

export interface IArticlesPayload {
  articles: IArticleDate[]
  amount: number
  page: number
}

export interface IGetArticles {
  type: ArticlesActionEnum.GET_ARTICLES
  page: number
}

export interface IGetArticlessSuccess {
  type: ArticlesActionEnum.GET_ARTICLES_SUCCESS
  payload: IArticlesPayload
}

export interface IAuthInitialStateProps {
  isAuth: boolean
  isLoading: boolean
  username: string
  password: string
  enteredUsername: string
  enteredPassword: string
  headerColor: string
}

export interface IAuthPayload {
  username: string
  password: string
}

export interface ISignIn {
  type: AuthActionEnum.SIGN_IN
  payload: IAuthPayload
}

export interface ISignInSuccess {
  type: AuthActionEnum.SIGN_IN_SUCCESS
}

export interface ISignInFail {
  type: AuthActionEnum.SIGN_IN_FAIL
}

export interface ISignUp {
  type: AuthActionEnum.SIGN_UP
  payload: IAuthPayload
}

export interface ISignUpSuccess {
  type: AuthActionEnum.SIGN_UP_SUCCESS
  payload: IAuthPayload
}

export interface IChangeColor {
  type: AuthActionEnum.CHANGE_COLOR
  payload: string
}
