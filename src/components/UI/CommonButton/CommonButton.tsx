import { ButtonHTMLAttributes, FC } from 'react';
import './style.scss';

const CommonButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  disabled = false,
  ...props
}) => {
  return (
    <button {...props} disabled={disabled} className='CommonButton' />
  )
}

export default CommonButton;
