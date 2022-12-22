import React from 'react'
import { Link } from 'react-router-dom'

export const AdminPages = () => {
  return (
    <div>
        <Link to="/thirdsList">
          <button className='btn btn-info'>Thirds</button>
        </Link>
        
        <br />
        <br />
        <Link to="/userList">
          <button  className='btn btn-info'>Users</button>
        </Link>
        

    </div>
  )
}
