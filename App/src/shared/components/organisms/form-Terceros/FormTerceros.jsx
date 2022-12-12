import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { getAllTipoDocumentoService, getAllTipoRegimenService, getAllTipoTercerosService } from '../../../../features/terceros/TercerosService';
import SelectTest from '../../atoms/select/SelectTest';

export const FormTest = ()=> {

  const [data, setData] = useState(null);
  const [userTypes, setUserTypes] = useState(null);
  const [typeRegimen, setTypeRegimen] = useState(null);
  const [typeDocumento, setTypeDocumento] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendTheDataTest = (data) => {
    setData(data)
    console.log(data);

  }

  let defaultValues = {

    userTypeId: ''

  }

  const getTypes = async () => {
    const types = await getAllTipoTercerosService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the userTypes in form", types);
    let userTypes = types.map((type) => {
      return {
        label: type.tipo_tercero,
        value: type.id
      }
    })
    setUserTypes(userTypes);
  }

  const getTypesRegimen = async () => {
    const typesRegimen = await getAllTipoRegimenService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the userTypes in form", typesRegimen);
    let typesTercerosRegimen = typesRegimen.map((type) => {
      return {
        label: type.regimen,
        value: type.id
      }
    })
    setTypeRegimen(typesTercerosRegimen);
  }

  const getTypesDocumento = async () => {
    const typesDocumento = await getAllTipoDocumentoService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
    console.log("here the userTypes in form", typesDocumento);
    let typesTercerosDocumento = typesDocumento.map((type) => {
      return {
        label: type.tipo_documento,
        value: type.id
      }
    })
    setTypeDocumento(typesTercerosDocumento);
  }

  useEffect(() => {//es un hoook que ejecuta
    getTypes();
    getTypesRegimen();
    getTypesDocumento();
    setLoading(true);

  }, [])
  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

  return (
    <div className='container-fluid'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
      <center>
        <div className='container-fluid'>
          <div className="row">
            <div className="col">
              <SelectTest name={'userTypeId'} control={control} rules={{ required: "is required" }} label={'userTypeId'} error={errors} placeHolder="select UserType" selectOptions={userTypes} />
            </div>
            <div className="col">
            <SelectTest name={'Regimen'} control={control} rules={{ required: "is required" }} label={'Regimen'} error={errors} placeHolder="select the Regime" selectOptions={typeRegimen} />
            </div>
            <div className="col">
            <SelectTest name={'TipoDocumento'} control={control} rules={{ required: "is required" }} label={'Tipo Documento'} error={errors} placeHolder="select the Type Identifier" selectOptions={typeDocumento} />
            </div>
          </div>
          <form onSubmit={handleSubmit(sendTheDataTest)}>
            <button type='submit' >Send Test</button>
          </form>
        </div>
      </center>
    </div>
  )
}
