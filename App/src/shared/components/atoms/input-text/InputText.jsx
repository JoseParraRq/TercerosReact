import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


export function Input(props) {
  const { error, name, label, style, icon, control, rules, block } = props

  return (
    <div className="field">
      <span className={style?.span}>
        {icon && <i className={icon} />}
        {block  && <label htmlFor={name} style={{display: 'block'}}>{label} :</label>}
        <Controller name={name} control={control}
          rules={rules}
          render={({ field, fieldState }) => (
            <InputText style={style} id={field.name} {...field} className={block ? classNames({ 'p-invalid': fieldState.invalid }) :classNames({ 'p-invalid': fieldState.invalid })} />
          )} />
        {!block && <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label} </label>}
      </span>
      {error[name] && <small className={style?.small ? 'p-error block' : 'p-error'}>{error[name].message}</small>}
    </div>

    
  );
}