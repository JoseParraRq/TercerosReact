import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';


export function InputPassword(props) {
	const { error, name, label, style, icon , control, rules } = props
    console.log(error, control)

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
	return (
		<div className="field">
			<span className={style.span}>
				{icon && <i className={icon} />}
				<Controller name={name} control={control}
					rules={rules}
					render={({ field, fieldState }) => (
						<Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader } footer={passwordFooter}/>
					)} />
				<label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}</label>
			</span>
			{error[name] && <small className="p-error">{error[name].message}</small>}
		</div>
	);
}
