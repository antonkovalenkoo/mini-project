import { mockArticles } from '../helpers/mockArticles'
import { IArticleDate } from '../models/interfaces'
import { limitPerPage } from '../constants'

export const getArticles = (page: number): Promise<IArticleDate[]> => {
  return new Promise((resolve) => {
    const firstIndexElement = page * limitPerPage - 1
    const result = mockArticles.filter(
      (element, index) =>
        index <= firstIndexElement && index >= firstIndexElement - (limitPerPage - 1)
    )
    resolve(result)
  })
}
