import React, { useEffect, useState } from "react";

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import { getAllTerceros } from "../features/thirds/services/TercerosService";
import { ThirdModal } from "../features/thirds/components";
import { useSelector } from "react-redux";
const ThirdsList = () => {

  const [data, setData] = useState(null)  
  const {token} = useSelector(state=>state.user);
  const [thirdEdit, setThirdEdit] = useState(false)  
  const [rowData, setRowData] = useState(null)  
  const getAllTercerosService= async()=>{
    const dat = await getAllTerceros(token);
    setData(dat)
  }

  useEffect(() => {
    getAllTercerosService()
  }, [])


  const rowClick = (e, row) => {
const selectRow = row.getData();
    setRowData(selectRow);
    setThirdEdit(true)
  
    // console.log('ref table: ', ref.current); // this is the Tabulator table instance
    // // ref?.current && ref?.current.replaceData([])
    // console.log('rowClick id: ${row.getData().id}', row, e);
    // setState({ selectedName: row.getData().name });
  };


  const columns = [
    { title: "Primer Nombre", field: "primerNombre", width: 100 },
    { title: "Segundo Nombre", field: "segundoNombre", width: 100 },
    { title: "Primer Apellido", field: "primerApellido", width: 100 },
    { title: "Segundo Apellido", field: "segundoApellido", width: 100 },
    { title: "Direccion", field: "direccion", width: 100 },
    { title: "Correo Electronico", field: "email", width: 100 },
    { title: "Telefono", field: "telefono", width: 100 },
    { title: "Celular", field: "celular", width: 100 },
    { title: "Documento", field: "documento", width: 100 },
    { title: "Tipo De Tercero", field: "tipoTercero", width: 100 },
    { title: "Regimen", field: "regimen", width: 100 },
    { title: "Tipo De Documento", field: "tipoDocumento", width: 100 },
    { title: "Departamento", field: "departamento", width: 100 },
    { title: "Ciudad", field: "ciudad", width: 100 },
  ];

  console.log(data);

  return (
    <div>
        <ThirdModal />    
        <ReactTabulator data={data} events={{rowClick: rowClick}} columns={columns} layout={"fitColumns"}/>
        {thirdEdit && <ThirdModal  third={rowData} /> }
    </div>
  );
};

export default ThirdsList;
