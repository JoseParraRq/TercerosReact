import React, { useState,useEffect } from 'react'
import  {Input} from "../../atoms/input-text/InputText";
import {InputPassword} from "../../atoms/input-password/InputPassword";
import { useForm, Controller } from 'react-hook-form';
import SelectTest from '../../atoms/select/SelectTest';

export default function FormTest() {

const [data,setData] = useState(null);
const [userTypes, setUserTypes] = useState(null);
const [loading, setLoading] = useState(false);

    const sendTheDataTest = (data) => {
        setData(data)
        console.log(data);

    }

let defaultValues = {
    
        name:'',
        pass:'',
        surName:'',
        pass2:'',
        userTypeId:''
    
    }

    const getTypes = async () => {
        const types = await getAllUserTypes();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
        console.log("her ethe userTypes in form",types);
        let userTypes= types.map((type)=>{
          return {
            label:type.name,
            value:type.id
          }
        })
        setUserTypes(userTypes);
      } 
      
      
        useEffect(() => {//es un hoook que ejecuta
          getTypes();
          setLoading(true);
          
        }, [])
const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    return (
        <div className='container-fluid'>
            <center>
            <div>
                <form onSubmit={handleSubmit(sendTheDataTest)}>
                <Input name='name' control={control} rules={{required:"El campo nombre es requerido"}} label={'name'} error={errors}/>
                <InputPassword name='pass' control={control} rules={{required:"is required"}} label={'pass'} error = {errors} style="span"/>
                <Input name='surName' control={control} rules={{required:"is required"}} label={'surName'} error={errors}/>
                <InputPassword name='pass2' control={control} rules={{required:"is required"}} label={'pass'} error = {errors} style="span"/>
                <SelectTest name={'userTypeId'} control={control} rules={{required:"is required"}} label={'userTypeId'} error={errors} selectOptions={userTypes}/>  
                <button type='submit' >Send Test</button>
                </form>
            </div>
            </center>
        </div>
    )
}
