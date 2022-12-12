import React, { useState,useEffect } from 'react'
import  {Input} from "../atoms/input-text/InputText";
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'primereact/button';

const PruebaComponente = () => {
    const [data,setData] = useState(null);
    const [userTypes, setUserTypes] = useState(null);
    const [loading, setLoading] = useState(false);
    
        const sendTheDataTest = (data) => {
            setData(data)
            console.log(data);
    
        }
    
    let defaultValues = {
        
        first_name:'',
        second_name:'',
        first_lastname:'',
        second_lastname:'',
            userTypeId:''
        
        }
    
        // const getTypes = async () => {
        //     const types = await getAllUserTypes();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
        //     console.log("her ethe userTypes in form",types);
        //     let userTypes= types.map((type)=>{
        //       return {
        //         label:type.name,
        //         value:type.id
        //       }
        //     })
        //     setUserTypes(userTypes);
        //   } 
          
          
        //     useEffect(() => {//es un hoook que ejecuta
        //       getTypes();
        //       setLoading(true);
              
        //     }, [])
            
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
    
        return (
            <div className='container-fluid'>
                <center>
                <div>
                    <form onSubmit={handleSubmit(sendTheDataTest)}>
                    <div>
                    <Input name='first_name' control={control} rules={{required:"El campo de primer nombre es requerido"}} label={'Primer Nombre'} error={errors}/>

                    <Input name='second_name' control={control} rules={{required:"El campo de segundo nombre es requerido"}} label={'Segundo Nombre'} error={errors}/>
                    </div>

                    <div>
                    <Input name='first_lastname' control={control} rules={{required:"El campo de primer apellido es requerido"}} label={'Primer Apellido'} error={errors}/>

                    <Input name='second_lastname' control={control} rules={{required:"El campo de segundo es requerido"}} label={'Segundo Apellido'} error={errors}/>
                    </div>

                    <br />
                    <Button label="Enviar" icon="pi pi-check" iconPos='right' />
                    </form>
                </div>
                </center>
            </div>
        )
}

export default PruebaComponente
