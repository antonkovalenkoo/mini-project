import { combineReducers, createStore, applyMiddleware } from 'redux'
import { ArticlesReducer } from './articles/reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas'
import { AuthReducer } from './auth/reducer'

export const rootReducer = combineReducers({
  articles: ArticlesReducer,
  auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
