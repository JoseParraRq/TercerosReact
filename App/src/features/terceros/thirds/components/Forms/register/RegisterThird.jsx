import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { Input, Select } from '../../../../../../shared/components';
import { useForm } from 'react-hook-form';
import { createThirdService, getAllCitiesService, getAllDepartmentsService, getAllTipoDocumentoService, getAllTipoRegimenService, getAllTipoTercerosService } from '../../../services/TercerosService';
import './styled.css'
import { useSelector, useDispatch } from "react-redux";
import { addThirds } from '../../../../../../redux/user/thirds/thirdsSlice';


export const RegisterThird = () => {

    const {newUsers} = useSelector(state=>state.third)
    console.log(newUsers);
    
    const dispatch = useDispatch()


    const [data, setData] = useState(null);
    const [userTypes, setUserTypes] = useState(null);
    const [typeRegimen, setTypeRegimen] = useState(null);
    const [typeDocumento, setTypeDocumento] = useState(null);
    const [cities, setCities] = useState(null);
    const [departments, setDepartments] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendTheDataTercero = async(data) => {
        setData(data)
        console.log(data);
        dispatch(addThirds(data))
        const response = await createThirdService(data);
        if (response.status = 200) {
            alert("¡Tercero creado existosamente!");
            setData(data);
            
        }else{
            alert("¡error, no se pudo crear el tercero!");
        }
    }

    let defaultValues = {
        typeTerceroId: '',
        documentTypeId: '',
        regimeTypeId:'',
        document: '',
        firstName: '',
        lastName: '',
        surName: '',
        secondSurName: '',
        department: '',
        cityId: '',
        address: '',
        email: '',
        phone: '',
        cellPhone: ''
    }

    const getTypes = async () => {
        const types = await getAllTipoTercerosService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
        console.log("here the TypesTerceros in form", types);
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
        console.log("here the regime in form", typesRegimen);
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
        console.log("here the TypesDocument in form", typesDocumento);
        let typesTercerosDocumento = typesDocumento.map((type) => {
            return {
                label: type.tipo_documento,
                value: type.id
            }
        })
        setTypeDocumento(typesTercerosDocumento);
    }

    const getAllCities = async () => {
        const getCitiesTercero = await getAllCitiesService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
        console.log("here the cities in form", getCitiesTercero);
        let citiesTercero = getCitiesTercero.map((type) => {
            return {
                label: type.ciudad,
                value: type.id
            }
        })
        setCities(citiesTercero);
    }

    const getAllDepartments = async () => {
        const getDepartmentsTercero = await getAllDepartmentsService();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
        console.log("here the departments in form", getDepartmentsTercero);
        let departmentsTercero = getDepartmentsTercero.map((type) => {
            return {
                label: type.departamento,
                value: type.id
            }
        })
        setDepartments(departmentsTercero);
    }

    useEffect(() => {//es un hoook que ejecuta
        getTypes();
        getTypesRegimen();
        getTypesDocumento();
        getAllCities();
        getAllDepartments();
        setLoading(true);

    }, [])
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


    return (
        <div className='container-fluid'>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>

            <center>

                <h1>Registro de terceros</h1>

                <h5>Informacion Principal </h5>

                <div className='container-fluid'>

                <form>

                    
                </form>
                    <div className='row'>

                        <div className='col'>
                            <Select name='typeTerceroId' control={control} rules={{ required: "is required" }} label={'Tipo Tercero'} error={errors} placeHolder="seleccione el tipo de Tercero" selectOptions={userTypes} />
                            <br/>
                            <Select name='documentTypeId' control={control} rules={{ required: "is required" }} label={'Tipo Documento'} error={errors} placeHolder="select the Type Identifier" selectOptions={typeDocumento} />
                        </div>


                        <div className='col'>
                            <Select name='regimeTypeId' control={control} rules={{ required: "is required" }} label={'Regimen'} error={errors} placeHolder="select the Regime" selectOptions={typeRegimen} />
                            <br/>
                            <Input block={true} name='document' label='Documento' control={control} error={errors} rules={{ required: 'Documento requerido.' }} />
                        </div>
                    </div>

                </div >
            </center>

            <br />

            <center>

                <h5>Datos Adicionales</h5>

                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col'>

                            <div>
                                <Input block={true} name='firstName' label='Primer Nombre' control={control} rules={{ required: "El campo de primer nombre es requerido" }} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} error={errors} />
                                <br/>
                                <Input block={true} name='lastName' label='Primer Apellido' control={control} rules={{ required: "El campo de primer apellido es requerido" }} error={errors} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} />
                            </div>

                        </div>

                        <div className='col'>

                            <div>
                                <Input block={true} name='surName' label='Segundo Nombre' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} error={errors} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} />
                                <br/>
                                <Input block={true} name='secondSurName' label='Segundo Apellido' control={control} rules={{ required: "El campo de segundo es requerido" }} error={errors} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} />
                            </div>

                        </div>

                    </div>


                </div>

            </center>

            <center>

                <h5>Datos Geograficos</h5>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <Select name='department' control={control} rules={{ required: "is required" }} label='Departamento' error={errors} placeHolder="selecione el departamento" selectOptions={departments} />
                                <br/>
                                <Input block={true} name='address' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label={'Dirección'} error={errors} />

                            </div>
                        </div>

                        <div className='col'>

                            <Select name='cityId' control={control} rules={{ required: "is required" }} label='Ciudad' error={errors} placeHolder="seleccione la ciudad" selectOptions={cities} />
                        </div>

                    </div>
                </div>
            </center>

            <center>

            <br/>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Input block={true} name='email' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Email' error={errors}/>
                    </div>

                    <div className='col'>
                <Input block={true} name='phone' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Telefono' error={errors} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} />

                    </div>

                    <div className='col'>
                <Input block={true} name='cellPhone' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Celular' error={errors} style={{ label: 'block', input: 'p-invalid block', small: 'p-error block' }} />
                <br/>
            <form onSubmit={handleSubmit(sendTheDataTercero)}>
            <div className='buttons'>
                <Button type="submit" label="Guardar" className="p-button-success " />
                <Button label="Cancelar" className="p-button-secondary" />
            </div>
            </form>
                    </div>
                </div>
            </div>
            </center>
            
            <br/>


        </div>


    )
}