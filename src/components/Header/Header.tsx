import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { logo } from '../../images'
import './styles.scss'

const Header: FC = () => {
  const locate = useLocation()
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header__container">
        <img onClick={() => navigate('blog')} src={logo} alt="logo" className="header__img_logo" />

        {locate.pathname === '/sign-in' && (
          <button onClick={() => navigate('sign-up')} className="header__button">
            Зарегистрироваться
          </button>
        )}
        {locate.pathname === '/sign-up' && (
          <button onClick={() => navigate('sign-in')} className="header__button">
            Войти
          </button>
        )}
        {locate.pathname === '/blog' && (
          <button onClick={() => navigate('sign-in')} className="header__button">
            Войти
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
