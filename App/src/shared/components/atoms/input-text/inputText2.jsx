import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


export function Input2(props) {
  const { error, name, label, style, icon, control, rules, block } = props

  const getFormErrorMessage = (name) => {
    return error[name] && <small className="p-error">{error[name].message}</small>
};

  return (
    <div className="field">
    <span className="p-float-label">
        <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
        )} />
        <label htmlFor="name" className={classNames({ 'p-error': error.name })}>Name*</label>
    </span>
    {getFormErrorMessage('name')}
</div>

    
  );
}