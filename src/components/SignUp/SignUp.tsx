import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik'
import { AuthForm } from '..';
import { IAuthEntries } from '../../models/interfaces';
import { useActions, useTypeSelector } from '../../hooks';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const { signUpAction } = useActions();
  const { isAuth } = useTypeSelector(
    (state) => state.auth
  )
  
  const onSubmitHandler = (
    values: IAuthEntries,
    { setSubmitting }: FormikHelpers<IAuthEntries>
  ) => {
    signUpAction(values);    
    setSubmitting(false);
  }

  if (isAuth) {
    navigate('/blog/1')
  }

  return (
    <div className='signIn'>
      <h1 className='signIn__heading'>Регистрация</h1>
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

export default SignUp
