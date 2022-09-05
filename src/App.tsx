import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Blog, SignIn, SignUp, Layout } from './components'
import './App.scss'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="blog/page/1" />} />
        <Route path="blog/" element={<Blog />}>
          <Route path="page/:page" element={<Blog />} />
          <Route path="blog/*" element={<Navigate to="blog/page/1" />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="blog/page/1" />} />
      </Route>
    </Routes>
  )
}

export default App
