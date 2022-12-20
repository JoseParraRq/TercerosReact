import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';
import ThirdsList from '../pages/ThirdsList.jsx';
import { RegisterUser } from '../pages/RegisterUser';
import { Home } from '../pages/Home.jsx';


function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<RegisterUser/>}/>
      <Route path='/thirdsList' element={<ThirdsList/>}/>
    </Routes>
  )
}

export default RoutesApp;