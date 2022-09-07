import { put, StrictEffect, takeEvery, fork, call, select } from 'redux-saga/effects'
import { IArticleDate } from '../../models/interfaces'
import { ArticlesActionEnum, IArticlesInitialStateProps, IGetArticles } from '../types'
import { mockArticles } from '../../helpers/mockArticles'
import { getArticles } from '../../api/ArticleService'
import { getArticlesSuccess } from '../articles/action'
import { RootState } from '..'

function* watchArticles(): Generator<StrictEffect> {
  yield takeEvery(ArticlesActionEnum.GET_ARTICLES, getArticlesWorker)
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

  const result: IArticleDate[] = yield call(getArticles, resultPage)
  yield put(getArticlesSuccess({ articles: result, amount: mockArticles.length, page: resultPage }))
}

export function* articleSaga() {
  yield fork(watchArticles)
}
