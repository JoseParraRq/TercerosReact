import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Input, Select } from "../../../../../../shared/components";
import { useForm } from "react-hook-form";
import {
  createThirdService,
  getAllCitiesService,
  getAllDepartmentsService,
  getAllTipoDocumentoService,
  getAllTipoRegimenService,
  getAllTipoTercerosService,
} from "../../../services/TercerosService";
import "./styled.css";
import { useSelector, useDispatch } from "react-redux";
import { addThirds } from "../../../../../../redux/user/thirds/thirdsSlice";


export const RegisterThird = () => {
  const { newUsers } = useSelector((state) => state.third);
  console.log(newUsers);

  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [userTypes, setUserTypes] = useState(null);
  const [typeRegimen, setTypeRegimen] = useState(null);
  const [typeDocumento, setTypeDocumento] = useState(null);
  const [cities, setCities] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendTheDataTercero = async (data) => {
    setData(data);
    console.log(data);
    dispatch(addThirds(data));
    const response = await createThirdService(data);
    if ((response.status = 200)) {
      alert("¡Tercero creado existosamente!");
      setData(data);
    } else {
      alert("¡error, no se pudo crear el tercero!");
    }
  };

  let defaultValues = {
    typeTerceroId: "",
    documentTypeId: "",
    regimeTypeId: "",
    document: "",
    firstName: "",
    lastName: "",
    surName: "",
    secondSurName: "",
    department: "",
    cityId: "",
    address: "",
    email: "",
    phone: "",
    cellPhone: "",
  };

  const getTypes = async () => {
    const types = await getAllTipoTercerosService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the TypesTerceros in form", types);
    let userTypes = types.map((type) => {
      return {
        label: type.tipo_tercero,
        value: type.id,
      };
    });
    setUserTypes(userTypes);
  };

  const getTypesRegimen = async () => {
    const typesRegimen = await getAllTipoRegimenService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the regime in form", typesRegimen);
    let typesTercerosRegimen = typesRegimen.map((type) => {
      return {
        label: type.regimen,
        value: type.id,
      };
    });
    setTypeRegimen(typesTercerosRegimen);
  };

  const getTypesDocumento = async () => {
    const typesDocumento = await getAllTipoDocumentoService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the TypesDocument in form", typesDocumento);
    let typesTercerosDocumento = typesDocumento.map((type) => {
      return {
        label: type.tipo_documento,
        value: type.id,
      };
    });
    setTypeDocumento(typesTercerosDocumento);
  };

  const getAllCities = async () => {
    const getCitiesTercero = await getAllCitiesService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the cities in form", getCitiesTercero);
    let citiesTercero = getCitiesTercero.map((type) => {
      return {
        label: type.ciudad,
        value: type.id,
      };
    });
    setCities(citiesTercero);
  };

  const getAllDepartments = async () => {
    const getDepartmentsTercero = await getAllDepartmentsService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the departments in form", getDepartmentsTercero);
    let departmentsTercero = getDepartmentsTercero.map((type) => {
      return {
        label: type.departamento,
        value: type.id,
      };
    });
    setDepartments(departmentsTercero);
  };

  useEffect(() => {
    //es un hoook que ejecuta
    getTypes();
    getTypesRegimen();
    getTypesDocumento();
    getAllCities();
    getAllDepartments();
    setLoading(true);
  }, []);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  return (
    <div className="container contenedor">

      <center>
        <h1>Registro de terceros</h1>

        {/* Primera card */}

          <div className="row card carta">
          <h5 className="card-title titulo">Informacion Principal </h5>
            <div className="col d-flex justify-content-around">
              <Select
                name="typeTerceroId"
                control={control}
                rules={{ required: "is required" }}
                label={"Tipo Tercero"}
                error={errors}
                placeHolder="seleccione el tipo de Tercero"
                selectOptions={userTypes}
              />
              <br />
              <Select
                name="documentTypeId"
                control={control}
                rules={{ required: "is required" }}
                label={"Tipo Documento"}
                error={errors}
                placeHolder="select the Type Identifier"
                selectOptions={typeDocumento}
              />
            </div>

            <div className="col d-flex justify-content-around">
              <Select
                name="regimeTypeId"
                control={control}
                rules={{ required: "is required" }}
                label={"Regimen"}
                error={errors}
                placeHolder="select the Regime"
                selectOptions={typeRegimen}
              />
              <br />
              <Input
                className=""
                block={true}
                name="document"
                label="Documento"
                control={control}
                error={errors}
                rules={{ required: "Documento requerido." }}
              />
            </div>
          </div>
      </center>
      <br />
    {/* Finaiza la primera card */}

    {/* Segunda card */}
      <center>
          <div className="row card carta">
          <h5 className="card-title titulo">Datos Adicionales</h5>
            <div className="col d-flex justify-content-around">
                <Input
                  block={true}
                  name="firstName"
                  label="Primer Nombre"
                  control={control}
                  rules={{ required: "El campo de primer nombre es requerido" }}
                  style={{
                    label: "block",
                    input: "p-invalid block",
                    small: "p-error block",
                  }}
                  error={errors}
                />
                <br />
                <Input
                  block={true}
                  name="lastName"
                  label="Primer Apellido"
                  control={control}
                  rules={{
                    required: "El campo de primer apellido es requerido",
                  }}
                  error={errors}
                  style={{
                    label: "block",
                    input: "p-invalid block",
                    small: "p-error block",
                  }}
                />
            </div>

            <div className="col d-flex justify-content-around">
                <Input
                  block={true}
                  name="surName"
                  label="Segundo Nombre"
                  control={control}
                  rules={{
                    required: "El campo de segundo nombre es requerido",
                  }}
                  error={errors}
                  style={{
                    label: "block",
                    input: "p-invalid block",
                    small: "p-error block",
                  }}
                />
                <br />
                <Input
                  block={true}
                  name="secondSurName"
                  label="Segundo Apellido"
                  control={control}
                  rules={{ required: "El campo de segundo es requerido" }}
                  error={errors}
                  style={{
                    label: "block",
                    input: "p-invalid block",
                    small: "p-error block",
                  }}
                />
            </div>
          </div>
      </center>
    {/* Finaliza la segunda card */}
    <br />
    {/* Tercera card */}
      <center>
          <div className="row card carta">
          <h5 className="card-title titulo">Datos Geograficos</h5>
            <div className="col d-flex justify-content-around">
                <Select
                  name="department"
                  control={control}
                  rules={{ required: "is required" }}
                  label="Departamento"
                  error={errors}
                  placeHolder="selecione el departamento"
                  selectOptions={departments}
                />

                <br />
                <Select
                name="cityId"
                control={control}
                rules={{ required: "is required" }}
                label="Ciudad"
                error={errors}
                placeHolder="seleccione la ciudad"
                selectOptions={cities}
              />
              </div>
              <div>
              <Input
                  style={{width:"42rem"}}
                  block={true}
                  name="address"
                  control={control}
                  rules={{
                    required: "El campo de segundo nombre es requerido",
                  }}
                  label={"Dirección"}
                  error={errors}
                />
              </div>
            </div>
      </center>
    {/* finaliza la tercera card */}
    <br />
    {/* Inicio card 4 */}
      <center>
          <div className="row card carta">
          <h5 className="card-title titulo" >Datos de comunicación</h5>
            <div className="col d-flex justify-content-around">
              <Input
                block={true}
                name="email"
                control={control}
                rules={{ required: "El campo de segundo nombre es requerido" }}
                label="Email"
                error={errors}
              />

              <Input
                block={true}
                name="phone"
                control={control}
                rules={{ required: "El campo de segundo nombre es requerido" }}
                label="Telefono"
                error={errors}
                style={{
                  label: "block",
                  input: "p-invalid block",
                  small: "p-error block",
                }}
              />

              <Input
                block={true}
                name="cellPhone"
                control={control}
                rules={{ required: "El campo de segundo nombre es requerido" }}
                label="Celular"
                error={errors}
                style={{
                  label: "block",
                  input: "p-invalid block",
                  small: "p-error block",
                }}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(sendTheDataTercero)}>
                <div className="buttons d-flex justify-content-center m-2 ">
                  <Button
                    type="submit"
                    label="Guardar"
                    className="p-button-success m-2"
                  />
                  <Button label="Cancelar" className="p-button-secondary m-2" />
                </div>
            </form>
      </center>
    {/* finaliza la card 4 */}
    </div>
  );
};
