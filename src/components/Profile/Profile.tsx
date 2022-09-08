import { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CommonButton } from '..'
import { changeColorAction } from '../../store/auth/action';
import './style.scss'

const Profile: FC = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  
  const changeColorHandler = () => {
    dispatch(changeColorAction(color));
    localStorage.setItem('header-color', color);
  }

  return (
    <div className="profile">
      <label htmlFor="color-change">Изменить цвет:</label>
      <input 
        id="color-change" 
        type="color" 
        onChange={(e) => setColor(e.target.value)
      }/>
      <CommonButton 
        className="profile__button"
        onClick={changeColorHandler}  
      >
        Приминить
      </CommonButton>
    </div>
  )
}

export default Profile