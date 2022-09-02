import { FC, useEffect, useState } from 'react'
import { Article, Pagination } from '../'
import { useTypeSelector } from '../../hooks'
import { useActions } from '../../hooks/useActions'
import './style.scss'

const Blog: FC = () => {
  const { getArticlesNextPage } = useActions()
  const [page, setPage] = useState<number>(1)
  const [itemLimit, setItemLimit] = useState<number>(10)
  const { articles, totalArticles } = useTypeSelector((state) => state.articles)

  useEffect(() => {
    getArticlesNextPage(page)
  }, [page, totalArticles])

  return (
    <div className="blog">
      <div className="blog__content">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>

      <Pagination
        className="blog__pagination"
        itemPerPage={itemLimit}
        page={page}
        setPage={setPage}
        totalAmount={totalArticles}
      />
    </div>
  )
}

export default Blog
