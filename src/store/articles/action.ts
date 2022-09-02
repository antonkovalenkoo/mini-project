import { ArticlesActionEnum, IArticlesPayload, IGetArticles } from '../types'

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
