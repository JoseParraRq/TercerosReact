import React, { useEffect, useState } from "react";
import RegisterThirdModal from "../shared/components/molecules/modal/RegisterThirdModal";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import { getAllTerceros } from "../features/terceros/thirds/services/TercerosService";

const ThirdsList = () => {

  const [data, setData] = useState(null)  

  const getAllTercerosService= async()=>{
    const dat = await getAllTerceros();
    setData(dat)
  }

  useEffect(() => {
    getAllTercerosService()
  }, [])


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
      <RegisterThirdModal />
      <br />
      <ReactTabulator
      data={data}
      columns={columns}
      layout={"fitColumns"}
      />
    </div>
  );
};

export default ThirdsList;
