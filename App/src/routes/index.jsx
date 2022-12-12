import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FormTest from '../shared/components/pages/form-Terceros/FormTerceros.jsx';
import PruebaComponente from '../shared/components/pages/PruebaComponente.jsx';

function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/formTest' element={<FormTest/>}/>
      <Route path='/pruebaComponente' element={<PruebaComponente/>}/>
    </Routes>
  )
}

export default RoutesApp;