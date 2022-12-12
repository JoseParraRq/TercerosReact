import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';


export function Input(props) {
  const { error, name, label, style, icon, control, rules } = props

  // const [optionType, setOptionType] = useState(type)
  // let container = null

  // switch (optionType) {
  //   case 'text':

  //     container =  <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
    
  //     break;

  //     case'password':
  //      container = 	<Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />

  //     break;

  //   default:
  //     break;
  // }


  return (
    <div className="field">
      <span className={style?.span}>
        {icon && <i className={icon} />}
        <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}: </label>

        <Controller name={name} control={control}
          rules={rules}
          render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
          )} />
      </span>
      {error[name] && <small className="p-error">{error[name].message}</small>}
    </div>
  );
}