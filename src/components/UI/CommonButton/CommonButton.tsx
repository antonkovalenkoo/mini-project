import { ButtonHTMLAttributes, FC } from 'react'
import './style.scss'

const CommonButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button {...props} className={className ? 'CommonButton' + ' ' + className : 'CommonButton'} />
  )
}

export default CommonButton
