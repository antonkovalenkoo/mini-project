import { IArticleDate } from '../models/interfaces'
import { mockImage } from '../assets'

const mockData: IArticleDate = {
  id: 1,
  image: mockImage,
  title: 'Заголовок 1',
  description: `Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк`,
  likeCounter: 10,
  commentCounter: 10,
  comments: [],
}

export const mockArticles: IArticleDate[] = new Array(35)
  .fill(mockData)
  .map((element, index) => ({ ...element, id: index + 1, title: `Заголовок ${index + 1}` }))
