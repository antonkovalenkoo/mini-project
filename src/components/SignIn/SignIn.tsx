import { FC, useEffect } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import CommonButton from '../UI/CommonButton/CommonButton';
import { validateUsername, validatePassword } from '../../helpers/validation';
import { IAuthEntries } from '../../models/interfaces';
import './style.scss';
import { useActions, useTypeSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const { signInAction } = useActions();
  const { isAuth } = useTypeSelector(
    (state) => state.auth
  )

  const onSubmitHandler = (
    values: IAuthEntries,
    { setSubmitting }: FormikHelpers<IAuthEntries>
  ) => {
    signInAction(values);
    setSubmitting(false);
  }

  if (isAuth) {
    navigate('/blog/1')
  }

  return (
    <div className='signIn'>
      <h1 className='signIn__heading'>Вход</h1>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched }) => (
          <Form className='signIn__form'>
            <div className='signIn__form__box'>
              <label 
                htmlFor="username"
                className='signIn__form__label'
                >
                Логин:
              </label>
              <Field 
                id="username" 
                name="username" 
                placeholder="Enter your username"
                type='text'
                className='signIn__form__input'
                validate={validateUsername}
              />
              {errors.username && touched.username && <div>{errors.username}</div>}
            </div>

            <div className='signIn__form__box'>
              <label 
                htmlFor="password"
                className='signIn__form__label'
              >
                Пароль:
              </label>
              <Field 
                id="password" 
                name="password" 
                placeholder="Enter password" 
                type='password'
                className='signIn__form__input'
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
        )}
      </Formik>
    </div>
  )
}

export default SignIn;
