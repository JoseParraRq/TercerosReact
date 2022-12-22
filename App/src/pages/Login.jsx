import React from 'react'
import { Navbar } from '../components/Navbar'
//import ModalLogin from '../features/users/components/modal_users/ModalLogin'
import FormLogin from '../features/users/components/forms/login/FormLogin'



export const Login = () => {

    return (
        <div>
            <Navbar/>
            <FormLogin/>
        </div>
    )
}


