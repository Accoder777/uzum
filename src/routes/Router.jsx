import React from 'react'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import NotFound404 from '../pages/error/NotFound404'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './path'

const Router = () => {
  return (
    <>
        <Routes>
            <Route element={<MainLayout/>}>  
                <Route path={publicRoutes.home} element={<Home/>}/>
                <Route path="*" element={<NotFound404/>}/>
            </Route>
      </Routes>
    </>
  )
}

export default Router