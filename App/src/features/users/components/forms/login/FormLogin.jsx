import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputPassword } from "../../../../../shared/components/atoms/input-password/InputPassword";
import { InputEmail } from "../../../../../shared/components/atoms/input-email/InputEmail";
import { loginUserService } from '../../../services/UserServices';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { signIn } from '../../../../../redux/user/userSlice';

const FormLogin = () => {
  const {authenticated} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  // console.log(authenticated);
  
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