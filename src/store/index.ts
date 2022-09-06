import { combineReducers, createStore, applyMiddleware } from 'redux'
import { ArticlesReducer } from './articles/reducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './articles/saga'

export const rootReducer = combineReducers({
  articles: ArticlesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
