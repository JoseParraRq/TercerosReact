import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputPassword } from '../../../../../shared/components/atoms/input-password/InputPassword';
import { InputEmail } from '../../../../../shared/components/atoms/input-email/InputEmail';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { Select } from '../../../../../shared/components/atoms/select/Select';

const FormRegisterUser = () => {
  const {authenticated} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  // console.log(authenticated);
  
  const navigate=useNavigate();

  const getAllRoles = async () => {
    const getRoles = await getAllRolesService(); //llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the cities in form", getCitiesTercero);
    let citiesTercero = getCitiesTercero.map((type) => {
      return {
        label: type.ciudad,
        value: type.id,
      };
    });
    setCities(citiesTercero);
  };

  let defaultValues = {
    email:"",
    password:""
  }

  const { control, formState: { errors }, handleSubmit, reset, } = useForm({ defaultValues });

  const sendTheData = async (data) => {

  };
   
  return (
    <div className='container-fluid'>
      <center>
        <div className="column">
          <div className="container contenedor">
            <h2>Registro de usuario.</h2>
            <Select
              name="roleType"
              control={control}
              rules={{ required: "is required" }}
              label={"Role"}
              error={errors}
              placeHolder="Select The Role"
              selectOptions={typeRegimen}
            />
            <br />
            <div className="col d-flex justify-content-around">
              <InputEmail  type="email"  name="email" label="Correo electronico" control={control} error={errors}/>
              <br />
              <InputPassword  name="pass" label="Contraseña" control={control} rules={{ required: "El campo de contraseña es requerido" }}  error={errors} style={{ label: "block", input: "p-invalid block", small: "p-error block", }}/>
            </div>
            <form  onSubmit={handleSubmit(sendTheData)}>
              <br />
              <div className="buttons d-flex justify-content-center m-2 ">
                <Button type="submit" label="Registrar" className="p-button-success m-2" href="/"/>
                <Button label="Cancelar" className="p-button-secondary m-2" /> 
              </div>
              <br />
              <br />
            </form>
          </div>
        </div>
      </center>
  </div>
  )
}

export default FormRegisterUser