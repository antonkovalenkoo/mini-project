import { ArticlesActionEnum, IArticlesInitialStateProps, ArticlesActionType } from '../types'

const initialState: IArticlesInitialStateProps = {
  articles: [],
  totalArticles: 0,
}

export const ArticlesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: ArticlesActionType
): IArticlesInitialStateProps => {
  switch (action.type) {
    case ArticlesActionEnum.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        totalArticles: action.payload.amount,
      }
    default:
      return state
  }
}
