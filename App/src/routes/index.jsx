import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PruebaComponente from '../shared/components/pages/PruebaComponente.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';
//import { FormLogin } from '../pages/Login.jsx';
// import { FormTest } from '../shared/components/index.js';
import ThirdsList from '../pages/ThirdsList.jsx';
import { RegisterUser } from '../pages/RegisterUser';


function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registro' element={<Register/>}/>
      <Route path='/pruebaComponente' element={<PruebaComponente/>}/>
      <Route path='/listarTerceros' element={<ThirdsList/>}/>
      <Route path='/registroUsuario' element={<RegisterUser/>}/>
    </Routes>
  )
}

export default RoutesApp;