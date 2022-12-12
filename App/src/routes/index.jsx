import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PruebaComponente from '../shared/components/pages/PruebaComponente.jsx';
import { Login } from '../pages/Login.jsx';
import { FormTest } from '../shared/components/index.js';


function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/formTest' element={<FormTest/>}/>
      <Route path='/pruebaComponente' element={<PruebaComponente/>}/>
    </Routes>
  )
}

export default RoutesApp;