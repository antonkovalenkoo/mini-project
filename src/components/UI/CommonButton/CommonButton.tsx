import { ButtonHTMLAttributes, FC } from 'react'
import './style.scss'

const CommonButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return <button {...props} className="CommonButton" />
}

export default CommonButton
