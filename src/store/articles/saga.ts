import { put, StrictEffect, takeEvery, fork, call } from 'redux-saga/effects'
import { IArticleDate } from '../../models/interfaces'
import { ArticlesActionEnum, IGetArticles } from '../types'
import { mockArticles } from '../../helpers/mockArticles'
import { getArticles } from '../../api/ArticleService'
import { getArticlesSuccess } from './action'

function* watchArticles(): Generator<StrictEffect> {
  yield takeEvery(ArticlesActionEnum.GET_ARTICLES, getArticlesWorker)
}

function* getArticlesWorker({ page }: IGetArticles) {
  const result: IArticleDate[] = yield call(getArticles, page)
  yield put(getArticlesSuccess({ articles: result, amount: mockArticles.length }))
}

function* rootSaga() {
  yield fork(watchArticles)
}

export { rootSaga }
