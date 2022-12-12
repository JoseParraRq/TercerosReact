import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { Input, Select } from '../../../../../../shared/components';
import { useForm } from 'react-hook-form';
import { getAllTipoDocumentoService, getAllTipoRegimenService, getAllTipoTercerosService } from '../../../services/TercerosService';
import './styled.css'


export const RegisterThird = () => {


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
        userTypeId: '',
        documentType: '',
        regimeType: '',
        document: '',
        firstName:'',
        secondName:'',
        firstLastname:'',
        secondLastname:'',
        departament:'',
        city:'',
        address: '',
        email: '',
        phone:'',
        cellPhone: ''

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

    // const cities = [
    //     { name: 'Bogota', code: 'BOG' },
    //     { name: 'Pereira', code: 'PER' }
    // ]

    return (
        <div>
            <h1>Registro de terceros</h1>

            <h5>Informacion Principal </h5>

            <div className='main_card'>

                <div>
                    <Select name='userTypeId' control={control} rules={{ required: "is required" }} label={'userTypeId'} error={errors} placeHolder="select UserType" selectOptions={userTypes} />
                    <Select name='documentType' control={control} rules={{ required: "is required" }} label={'Tipo Documento'} error={errors} placeHolder="select the Type Identifier" selectOptions={typeDocumento} />
                </div>


                <div>
                    <Select name='Regimen' control={control} rules={{ required: "is required" }} label={'Regimen'} error={errors} placeHolder="select the Regime" selectOptions={typeRegimen} />
                    <Input name='document' label='Documento' control={control} error={errors} style={{ span: "p-float-label" }} rules={{ required: 'Documento requerido.' }} />
                </div>

            </div >
            <br />

            <h5>Datos Adicionales</h5>

            <div className='main_card'>

                <div>
                    <Input name='first_name' label='Primer Nombre' control={control} rules={{ required: "El campo de primer nombre es requerido" }} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }} error={errors} />
                    <Input name='first_lastname' label='Primer Apellido' control={control} rules={{ required: "El campo de primer apellido es requerido" }} error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }}/>
                </div>

                <div>
                    <Input name='second_name' label='Segundo Nombre' control={control} rules={{ required: "El campo de segundo nombre es requerido" }}  error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }} />
                    <Input name='second_lastname' label='Segundo Apellido' control={control} rules={{ required: "El campo de segundo es requerido" }}  error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }}/>
                </div>

            </div>

            <div className='main_card'>
                <div>
                    <Select name='Departament' control={control} rules={{ required: "is required" }} label='Departamento' error={errors} placeHolder="selecione el departamento" selectOptions={typeRegimen} />
                    <Select name='City' control={control} rules={{ required: "is required" }} label='Ciudad' error={errors} placeHolder="seleccione la ciudad" selectOptions={typeRegimen} />

                </div>


                <Input name='address' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label={'Segundo Nombre'} error={errors} />

            </div>

            <div className='main_card'>
                <Input name='email' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Segundo Nombre' error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }} />
                <Input name='phone' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Segundo Nombre' error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }} />
                <Input name='cellPhone' control={control} rules={{ required: "El campo de segundo nombre es requerido" }} label='Segundo Nombre' error={errors} style={{ label:'block', input:'p-invalid block', small: 'p-error block'  }}/>

            </div>

            <div className='buttons'>
                <Button type="submit" label="Guardar" className="p-button-success " />
                <Button label="Cancelar" className="p-button-secondary" />
            </div>

        </div>


    )
}