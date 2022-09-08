import { FC, useEffect } from 'react'
import { like, comment } from '../../images/index'
import { CommonButton, Rating } from '../'
import { useNavigate, useParams } from 'react-router'
import { useActions, useTypeSelector } from '../../hooks'
import './styles.scss'

const ArticlePage: FC = () => {
  const { id } = useParams()
  const { getArticle } = useActions()
  const { article } = useTypeSelector((state) => state.articles)
  const navigate = useNavigate()

  useEffect(() => {
    getArticle(+id!)
  }, [])

  return (
    <div className="article-page">
      {article && (
        <>
          <div className="article-page__button_return">
            <CommonButton onClick={() => navigate('../blog/1')}>Вернуться на главную</CommonButton>
          </div>

          <div className="article-page__header">
            <h2 className="article-page__title">{article.title}</h2>
          </div>

          <div className="article-page__main">
            <img className="article-page__img" src={article.image} alt="image" />

            <p className="article-page__text">{article.description}</p>
          </div>

          <div className="article-page__footer">
            <div className="article-page__rating">
              <p className="article-page__rating-text">Рейтинг статьи:</p>

              <Rating negativeValue={article.dislikeCounter} positiveValue={article.likeCounter} />
            </div>

            <div className="article-page__wrapper">
              <div className="article-page__action">
                <button className="article-page__button article-page__button_dislike">
                  <img src={like} alt="dislike" />
                </button>

                <p className="article__action-count">{article.dislikeCounter}</p>
              </div>

              <div className="article-page__action">
                <button className="article-page__button">
                  <img src={comment} alt="comment" />
                </button>

                <p className="article__action-count">{article.comments.length}</p>
              </div>

              <div className="article-page__action">
                <button className="article-page__button article-page__button_like">
                  <img src={like} alt="like" />
                </button>

                <p className="article__action-count">{article.likeCounter}</p>
              </div>
            </div>

            <CommonButton>Перейти к коментариям</CommonButton>
          </div>
        </>
      )}

      {!article && <h1 className="article-page__error-text">Такой страницы не существует!</h1>}
    </div>
  )
}

export default ArticlePage
