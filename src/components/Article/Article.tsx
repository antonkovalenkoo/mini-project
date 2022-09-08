import { FC } from 'react'
import { useNavigate } from 'react-router'
import { CommonButton } from '../'
import { comment, like } from '../../images'
import { IArticleProps } from './interface'
import './style.scss'

const Article: FC<IArticleProps> = ({ article }) => {
  const navigate = useNavigate()

  return (
    <div className="article">
      <img
        className="article__img"
        onClick={() => navigate(`../blog/articles/${article.id}`)}
        src={article.image}
        alt="image"
      />

      <div className="article__preview">
        <h3 className="article__preview-heading">{article.title}</h3>

        <p className="article__preview-description">{article.description}</p>

        <div className="article__actions">
          <CommonButton className="article__actions-button">Читать</CommonButton>

          <div className="article__action-wrapper">
            <div className="article__action-like">
              <button className="article__action-button article__action-button_like">
                <img src={like} alt="like" />
              </button>

              <p className="article__action-count">{article.likeCounter}</p>
            </div>

            <div className="article__action-dislike">
              <button className="article__action-button article__action-button_dislike">
                <img className="article__action-dislike" src={like} alt="dislike" />
              </button>

              <p className="article__action-count">{article.dislikeCounter}</p>
            </div>

            <div className="article__action-comment">
              <button className="article__action-button">
                <img src={comment} alt="comment" />
              </button>

              <p className="article__action-count">{article.comments.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
