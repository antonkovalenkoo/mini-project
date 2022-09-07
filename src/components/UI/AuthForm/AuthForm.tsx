import { FC } from 'react'
import { Form, Field } from 'formik'
import { validatePassword, validateUsername } from '../../../helpers/validation'
import CommonButton from '../CommonButton/CommonButton'
import { AuthFormProps } from '../../../models/interfaces'
import './style.scss'

const AuthForm: FC<AuthFormProps> = ({ errors, touched }) => {
  return (
    <Form className='form'>
      <div className='form__box'>
        <label 
          htmlFor="username"
          className='form__label'
          >
          Логин:
        </label>
        <Field 
          id="username" 
          name="username" 
          placeholder="Enter your username"
          type='text'
          className='form__input'
          validate={validateUsername}
        />
        {errors.username && touched.username && <div>{errors.username}</div>}
      </div>

      <div className='form__box'>
        <label 
          htmlFor="password"
          className='form__label'
        >
          Пароль:
        </label>
        <Field 
          id="password" 
          name="password" 
          placeholder="Enter password" 
          type='password'
          className='form__input'
          validate={validatePassword}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
      </div>

      <CommonButton 
        type="submit"
      >
        Войти
      </CommonButton>
    </Form>
  )
}

export default AuthForm