import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICommonInputProps } from '../../../models/index';
import './style.scss';

const CommonInput: FC<ICommonInputProps> = ({ 
  prefixIcon,
  postfixIcon,
  className,
  style,
  ...props
}) => {
  return (
    <div className='commonInput'>
      {prefixIcon && 
        <FontAwesomeIcon
          title='prefix'
          className='commonInput__icon' 
          icon={prefixIcon} 
        />
      }
      <input 
        {...props}
        className= {`commonInput__input ${prefixIcon && 'padding-big'}`}
      />
      {postfixIcon && 
        <FontAwesomeIcon
          title='postfix'
          className='commonInput__icon postfix' 
          icon={postfixIcon} 
        />
      }
    </div>
  )
}

export default CommonInput;