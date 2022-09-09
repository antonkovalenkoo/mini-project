import { IArticle } from '../models/interfaces'
import { mockImage } from '../images'
import { minRandomNumber, maxRandomNumber } from '../constants'

const mockData: IArticle = {
  id: 1,
  image: mockImage,
  title: 'Заголовок 1',
  description: `Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк
  Превью статьи на пару строк`,
  likeCounter: 10,
  dislikeCounter: 10,
  comments: [],
}

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber)) + minRandomNumber
}

export const mockArticles: IArticle[] = new Array(35).fill(mockData).map((element, index) => ({
  ...element,
  id: index + 1,
  title: `Заголовок ${index + 1}`,
  likeCounter: getRandomNumber(),
  dislikeCounter: getRandomNumber(),
}))
