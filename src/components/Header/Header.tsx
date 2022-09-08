import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useTypeSelector } from '../../hooks'
import { logo, profile } from '../../assets'
import { changeColor } from '../../helpers/changeColor'
import './styles.scss'

const Header: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { articlePage } = useTypeSelector(state => state.articles)
  const { isAuth } = useTypeSelector(state => state.auth)
  const { headerColor } = useTypeSelector(state => state.auth)

  useEffect(() => {
    let newColor = headerColor;
    if (!headerColor) {
      const colorFromStorage = localStorage.getItem('header-color');
      if (colorFromStorage) {
        newColor = colorFromStorage
      }
    }
    changeColor('--header-color', newColor);
  }, [headerColor])


  return (
    <div className="header" >
      <div className="header__container">
        <img
          onClick={() => navigate(`/blog/${articlePage}`)}
          src={logo}
          alt="logo"
          className="header__img_logo"
        />

        {isAuth ? (
          <Link to='/profile'>
            <img 
              className='header__img_profile'
              src={profile} 
              alt='profile' 
            />
          </Link>
        ) : (
          <>
            {location.pathname === '/sign-in' && (
              <button onClick={() => navigate('sign-up')} className="header__button">
                Зарегистрироваться
              </button>
            )}
            {location.pathname === '/sign-up' && (
              <button onClick={() => navigate('sign-in')} className="header__button">
                Войти
              </button>
            )}
            {location.pathname === `/blog/${articlePage}` && (
              <button onClick={() => navigate('sign-in')} className="header__button">
                Войти
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Header
