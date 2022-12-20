import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';


export function InputPassword(props) {

	let defaultValues={
		password:""
	}

	const { error, name, label, style, icon , control, rules, block } = props
	const { formState: { errors }} = useForm({ defaultValues });

	const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

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
            <span className="">
            <label htmlFor="password"className={classNames({ 'p-error': errors.password })}>{label}</label>
            <br />
                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
                )} />
            </span>
            {getFormErrorMessage('password')}
        </div>
	);
}
