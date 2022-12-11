import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FormTest from '../shared/components/pages/form-Terceros/FormTerceros.jsx';

function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/formTest' element={<FormTest/>}/>
    </Routes>
  )
}

export default RoutesApp;