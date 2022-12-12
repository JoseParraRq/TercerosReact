import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';


export function Input(props) {
  const { error, name, label, style, icon, control, rules, block } = props

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
        {block  && <label htmlFor={name} style={{display: 'block'}}>{label} :</label>}
        <Controller name={name} control={control}
          rules={rules}
          render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} className={block ? classNames({ 'p-invalid': fieldState.invalid }) :classNames({ 'p-invalid': fieldState.invalid })} />
          )} />
        {!block && <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label} </label>}
      </span>
      {error[name] && <small className={style.small ? 'p-error block' : 'p-error'}>{error[name].message}</small>}
    </div>

    
  );
}