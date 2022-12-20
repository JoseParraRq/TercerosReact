import React, { useEffect, useState } from "react";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import { useSelector } from "react-redux";
import { getAllUsers } from "../features/users/services/UserServices";
import ModalUser  from "../features/users/components/modal_users/ModalUser";

const UsersList = () => {

  const [data, setData] = useState(null)  
  const {token} = useSelector(state=>state.user);
  
  const getAllUserService= async()=>{
    const dat = await getAllUsers(token);
    console.log(dat);
    setData(dat)
  }

  useEffect(() => {
    getAllUserService()
  }, [])


  const rowClick = (e, row) => {
    console.log(row.getData())
  };


  const columns = [
    { title: "Rol", field: "role", width: 100 },
    { title: "Correo Electronico", field: "email", width: 100 },
  ];

  // console.log(data);

  return (
    <div>
        <ModalUser/> 
        <ReactTabulator data={data} events={{rowClick: rowClick}} columns={columns} layout={"fitColumns"}/>
    </div>
  );
};

export default UsersList;
