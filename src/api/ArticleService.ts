import { mockArticles } from '../helpers/mockArticles'
import { IArticle } from '../models/interfaces'
import { limitPerPage } from '../constants'

export const getArticles = (page: number): Promise<IArticle[]> => {
  return new Promise((resolve) => {
    const firstIndexElement = page * limitPerPage - 1
    const result = mockArticles.filter(
      (element, index) =>
        index <= firstIndexElement && index >= firstIndexElement - (limitPerPage - 1)
    )
    resolve(result)
  })
}

export const getArticle = (id: number): Promise<IArticle> => {
  return new Promise((resolve) => {
    const result = mockArticles.find((element) => element.id === id)
    resolve(result!)
  })
}
