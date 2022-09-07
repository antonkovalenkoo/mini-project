import { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { IAuthEntries } from '../../models/interfaces';
import { useActions, useTypeSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '..';
import './style.scss';

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
          <AuthForm 
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    </div>
  )
}

export default SignIn;
