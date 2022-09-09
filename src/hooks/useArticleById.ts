import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useActions } from './useActions'
import { useTypeSelector } from './useTypeSelector'

export const useArticleById = () => {
  const { id } = useParams()
  const { getArticle } = useActions()
  const { article } = useTypeSelector((state) => state.articles)

  useEffect(() => {
    getArticle(+id!)
  }, [])

  return article
}
