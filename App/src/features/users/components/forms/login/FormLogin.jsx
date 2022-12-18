import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputPassword } from "../../../../../shared/components/atoms/input-password/InputPassword";
import { InputEmail } from "../../../../../shared/components/atoms/input-email/InputEmail";
import { loginUserService } from '../../../services/UserServices';
import { useNavigate } from "react-router-dom";



const FormLogin = () => {

  const navigate=useNavigate();

  let defaultValues = {
    email:"",
    password:""
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const sendTheDataLogin = async (data) => {
    const response = await loginUserService(data);
    if (data.email !== response[0].email && data.password !== response[0].password) {
      alert("email o contraseña incorrecto")
    }else{
      navigate("/listarTerceros")
    }
  };
   
    return (
    <div className='container-fluid'>
      <center>
      <div className="column">
      <div className="container card">
        <h2>Login</h2>
          <InputEmail  type="email"  name="email" label="Correo electronico" control={control} error={errors}/>
          <br />
          <br />
          <InputPassword  name="pass" label="Contraseña" control={control} rules={{ required: "El campo de contraseña es requerido" }}  error={errors} style={{ label: "block", input: "p-invalid block", small: "p-error block", }}/>
          <form  onSubmit={handleSubmit(sendTheDataLogin)}>
          <div className="buttons d-flex justify-content-center m-2 ">
            <Button type="submit" label="Guardar" className="p-button-success m-2" />
            <Button label="Cancelar" className="p-button-secondary m-2" />
          </div>
        </form>
      </div>
      </div>
      </center>
    </div>
  )
}

export default FormLogin