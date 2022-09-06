import { ArticlesActionEnum, IArticlesInitialStateProps, ArticlesActionType } from '../types'

const initialState: IArticlesInitialStateProps = {
  articles: [],
  totalArticles: 0,
  limitPerPage: 10,
  articlePage: 1,
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
        articlePage: action.payload.page,
      }
    default:
      return state
  }
}
