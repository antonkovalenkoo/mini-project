import { IArticleDate } from '../../models/interfaces'
import { ArticlesActionEnum } from './enums'

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
