import { FC } from 'react'
import { CommonButton } from '../'
import { comment, like } from '../../images'
import { IArticleProps } from './interface'
import './style.scss'

const Article: FC<IArticleProps> = ({ article }) => {
  return (
    <div className="article">
      <img className="article__img" src={article.image} alt="image" />

      <div className="article__preview">
        <h3 className="article__preview-heading">{article.title}</h3>

        <p className="article__preview-description">{article.description}</p>

        <div className="article__actions">
          <CommonButton className="article__actions-button">Читать</CommonButton>

          <div className="article__action-wrapper">
            <div className="article__action-like">
              <button className="article__action-button">
                <img src={like} alt="like" />
              </button>

              <p className="article__action-count">{article.likeCounter}</p>
            </div>

            <div className="article__action-comment">
              <button className="article__action-button">
                <img src={comment} alt="comment" />
              </button>

              <p className="article__action-count">{article.commentCounter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
