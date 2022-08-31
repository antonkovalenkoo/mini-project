import { FC } from 'react'
import { Routes, Route } from 'react-router'
import { MainPage, SignIn, SignUp } from './components'
import './App.scss'

const App: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<SignIn />} />
      <Route path="mainPage" element={<MainPage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  )
}

export default App
