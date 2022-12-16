import React, { useEffect, useState } from "react";

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import { ThirdModal } from "../features/thirds/components";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTerceros } from "../features/thirds/services/TercerosService";

const ThirdsList = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { thirds } = useSelector(state=>state.third);

  // const getAllTercerosService= async()=>{
  //   const dat = await getAllTerceros();
  //   setData(dat)
  // }




  useEffect(() => {
    // getAllTercerosService()
    dispatch(getAllTerceros());
    setData(thirds);
  }, [])


  const rowClick = (e, row) => {

    console.log(row.getData())
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
      <br />
      <ReactTabulator
      data={thirds }
      events={{
        rowClick: rowClick
      }}
      columns={columns}
      layout={"fitColumns"}
      />
    </div>
  );
};

export default ThirdsList;
