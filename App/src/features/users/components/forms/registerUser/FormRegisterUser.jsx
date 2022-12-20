import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputPassword } from '../../../../../shared/components/atoms/input-password/InputPassword';
import { InputEmail } from '../../../../../shared/components/atoms/input-email/InputEmail';
import { loginUserService } from '../../../services/UserServices';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { signIn } from '../../../../../redux/user/userSlice';
import { Input2 } from '../../../../../shared/components/atoms/input-text/inputText2';

const FormRegisterUser = () => {
  const {authenticated} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  // console.log(authenticated);
  
  const navigate=useNavigate();

  let defaultValues = {
    email:"",
    password:""
  }

  const { control, formState: { errors }, handleSubmit, reset, } = useForm({ defaultValues });

  const sendTheDataLogin = async (data) => {
    const response = await loginUserService(data);
    console.log(response);
    if (response.message) {
      let msg = response.message
      alert(msg)
    }else{
      dispatch(signIn({email:response.email,token:response.token}));
      //   let emailStorage = localStorage.setItem('email',response.response.user[0].email);
      //   let get = localStorage.getItem('email')
      //   console.log("here the local storage===>>>",get);
      // }
      //  
       navigate("/")
    }
  };
   
  return (
    <div className='container-fluid'>
      <center>
        <div className="column">
          <div className="container contenedor">
            <h2>Registro de usuario.</h2>
            <br />
            <div className="col d-flex justify-content-around">
              <Input2 block={true} name="firstName" label="Nombre" control={control} rules={{ required: "El campo de nombre es requerido" }}
                style={{ label: "block", input: "p-invalid block", small: "p-error block",}} error={errors} />
              <br />
              <Input2 block={true} name="lastName" label="Apellido" control={control} rules={{required: "El campo de apellido es requerido",
                 }} error={errors} style={{ label: "block", input: "p-invalid block", small: "p-error block",}}/>
            </div>
            <br />
            <div className="col d-flex justify-content-around">
              <Input2 block={true} name="firstName" label="Nombre" control={control} rules={{ required: "El campo de nombre es requerido" }}
                style={{ label: "block", input: "p-invalid block", small: "p-error block",}} error={errors} />
              <br />
              <Input2 block={true} name="lastName" label="Apellido" control={control} rules={{required: "El campo de apellido es requerido",
                 }} error={errors} style={{ label: "block", input: "p-invalid block", small: "p-error block",}}/>
            </div>
            <br />
            <div className="col d-flex justify-content-around">
              <InputEmail  type="email"  name="email" label="Correo electronico" control={control} error={errors}/>
              <br />
              <InputPassword  name="pass" label="Contraseña" control={control} rules={{ required: "El campo de contraseña es requerido" }}  error={errors} style={{ label: "block", input: "p-invalid block", small: "p-error block", }}/>
            </div>
            <form  onSubmit={handleSubmit(sendTheDataLogin)}>
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