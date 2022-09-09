import { put, StrictEffect, takeEvery, fork, call, select } from 'redux-saga/effects'
import { IArticle } from '../../models/interfaces'
import { ArticlesActionEnum, IGetArticles } from '../types'
import { mockArticles } from '../../helpers/mockArticles'
import { getArticles, getArticle } from '../../api/ArticleService'
import { getArticlesSuccess, getArticleSuccess } from '../articles/action'
import { RootState } from '..'
import { IGetArticle } from '../types/interfaces'

function* watchArticles(): Generator<StrictEffect> {
  yield takeEvery(ArticlesActionEnum.GET_ARTICLES, getArticlesWorker)
  yield takeEvery(ArticlesActionEnum.GET_ARTICLE, getArticleWorker)
}
const getItems = (state: RootState) => state.articles

function* getArticlesWorker({ page }: IGetArticles) {
  const state: ReturnType<typeof getItems> = yield select(getItems)

  const resultPage =
    page <= 0
      ? state.articlePage
      : page > Math.ceil(state.totalArticles / state.limitPerPage)
      ? state.articlePage
      : page

  const result: IArticle[] = yield call(getArticles, resultPage)
  yield put(getArticlesSuccess({ articles: result, amount: mockArticles.length, page: resultPage }))
}

function* getArticleWorker({ id }: IGetArticle) {
  const result: IArticle = yield call(getArticle, id)
  yield put(getArticleSuccess(result))
}

export function* articleSaga() {
  yield fork(watchArticles)
}
