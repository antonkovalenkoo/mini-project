import { ArticlesActionEnum, IArticlesPayload, IGetArticles } from '../types'
import { IArticleDate } from '../../models/interfaces'
import { IGetArticle } from '../types/interfaces'

export const getArticlesNextPage = (page: number): IGetArticles => {
  return {
    type: ArticlesActionEnum.GET_ARTICLES,
    page,
  }
}

export const getArticlesSuccess = (payload: IArticlesPayload) => ({
  type: ArticlesActionEnum.GET_ARTICLES_SUCCESS,
  payload,
})

export const getArticle = (id: number): IGetArticle => {
  return {
    type: ArticlesActionEnum.GET_ARTICLE,
    id,
  }
}

export const getArticleSuccess = (payload: IArticleDate) => ({
  type: ArticlesActionEnum.GET_ARTICLE_SUCCESS,
  payload,
})
