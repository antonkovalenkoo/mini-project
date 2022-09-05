import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Article, Pagination } from '../'
import { useTypeSelector } from '../../hooks'
import { useActions } from '../../hooks/useActions'
import './style.scss'

const Blog: FC = () => {
  const { getArticlesNextPage } = useActions()
  const { page } = useParams()
  const { articles, totalArticles, articlePage, limitPerPage } = useTypeSelector(
    (state) => state.articles
  )
  const navigate = useNavigate()

  const pageValidation = () => {
    if (!!totalArticles) {
      return +page! > 0
        ? +page! <= Math.ceil(totalArticles / limitPerPage)
          ? navigate(`page/${page}`)
          : navigate('page/1')
        : navigate('page/1')
    }
  }

  useEffect(() => {
    pageValidation()
    getArticlesNextPage(+page!)
  }, [articlePage, totalArticles, page])

  return (
    <div className="blog">
      <div className="blog__content">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>

      <Pagination
        className="blog__pagination"
        page={+page!}
        totalAmount={totalArticles}
        limitPerPage={limitPerPage}
      />
    </div>
  )
}

export default Blog
