import React from 'react'
import { Navbar } from '../components/Navbar'
import terceros from '../assets/img/terceros.jpg'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <center>
            <img  src={terceros} alt="" />
        </center>
        
    </div>
  )
}
