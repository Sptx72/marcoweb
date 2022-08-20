import {  AboutMe, Home, Skills  }from '../pages';
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
