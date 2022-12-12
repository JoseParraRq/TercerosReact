import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';
import { FormTest } from '../shared/components/index.js';


function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/formTest' element={<FormTest/>}/>
    </Routes>
  )
}

export default RoutesApp;