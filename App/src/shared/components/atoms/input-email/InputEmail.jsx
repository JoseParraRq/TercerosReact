import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


export function InputEmail(props) {

	const { error, type, name, label, style, icon, control, rules, block } = props

	const getFormErrorMessage = (name) => {
        return error[name] && <small className="p-error">{error[name].message}</small>
    };

  return (
    <div className="field">
    <span>
    
        <label htmlFor="email" className={classNames({ 'p-error': !!error.email })}>{label}</label>
        <i className="pi pi-envelope" />
        <br />
        <Controller name="email" control={control}
            rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
            render={({ field, fieldState }) => (
                <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
        )} />
    </span>
      {getFormErrorMessage('email')}
    </div>
  );
}
