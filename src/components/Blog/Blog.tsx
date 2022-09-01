import { FC } from 'react'
import { Article } from '../'
import { mockArticles } from '../../helpers/mockArticles'
import './style.scss'

const Blog: FC = () => {
  return (
    <div className="blog">
      {mockArticles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Blog
