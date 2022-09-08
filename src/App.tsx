import { FC, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Blog, SignIn, SignUp, Layout, Profile } from './components'
import { changeColor } from './helpers/changeColor'
import './App.scss'

const App: FC = () => {
  useEffect(() => {
    changeColor('--header-color', localStorage.getItem('header-color'));
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="blog/1" />} />
        <Route path="blog/:page" element={<Blog />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="blog/1" />} />
      </Route>
    </Routes>
  )
}

export default App
