import { FC, useState } from 'react'
import { CommonButton } from '..'
import { changeColor } from '../../helpers/changeColor';
import './style.scss'

const Profile: FC = () => {
  const [color, setColor] = useState('');
  
  const changeColorHandler = () => {
    localStorage.setItem('header-color', color);
    changeColor('header', color);
  }

  return (
    <div className="profile">
      <label htmlFor="color-change">Изменить цвет:</label>
      <input 
        id="color-change" 
        type="color"
        value={color || localStorage.getItem('header-color') || undefined}
        onChange={(e) => setColor(e.target.value)}
      />
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