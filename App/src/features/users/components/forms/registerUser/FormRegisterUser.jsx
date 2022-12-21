import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputPassword } from '../../../../../shared/components/atoms/input-password/InputPassword';
import { InputEmail } from '../../../../../shared/components/atoms/input-email/InputEmail';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Select } from '../../../../../shared/components/atoms/select/Select';
import { createUserService, getAllRoles } from '../../../services/UserServices';

const FormRegisterUser = () => {
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  // console.log(authenticated);

  const navigate = useNavigate();

  const [roles, setRoles] = useState(null)

  const getAllRol = async () => {
    const getRoles = await getAllRoles(token);

    let Rolles = getRoles.map((type) => {
      return {
        label: type.role,
        value: type.id,
      };
    });
    setRoles(Rolles);
  };

  useEffect(() => {
    getAllRol()
  }, [])


  let defaultValues = {

    email: "",
    password: ""
  }

  const { control, formState: { errors }, watch, handleSubmit, reset, } = useForm({ defaultValues });

  const [data, setData] = useState(null);

  const sendTheData = async (data) => {
    console.log(data)
    const response = await createUserService(data);
    if ((response.status = 200)) {
      alert("¡Usuario creado existosamente!");
      setData(data);
    } else {
      alert("¡error, no se pudo crear el usuario!");
    }
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleSubmit(sendTheData)}>
        <center>
          <div className="column">
            <div className="container contenedor">
              <h2>Crear Usuario</h2>
              <Select
                name="roleType"
                control={control}
                rules={{ required: "is required" }}
                label={"Role"}
                error={errors}
                placeHolder="Select The Role"
                selectOptions={roles}
              />
              <br />
              <div className="col d-flex justify-content-around">
                <InputEmail type="email" name="email" label="Correo electronico" control={control} error={errors} />
                <br />
                <InputPassword name="password" label="Contraseña" control={control} rules={{ required: "El campo de contraseña es requerido" }} error={errors} style={{ span: "p-float-label" }} />
              </div>

              <br />
              <div className="buttons d-flex justify-content-center m-2 ">
                <Button type="submit" label="Registrar" disabled={Object.values(watch()).some(x => (x === ''))? true: false} className="p-button-success m-2" />
              </div>
              <br />
              <br />

            </div>
          </div>
        </center>
      </form>
    </div >
  )
}

export default FormRegisterUser