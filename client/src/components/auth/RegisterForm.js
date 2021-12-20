import React, { useRef } from "react";
import Button from "../utilities/Button";
import Input from "../utilities/Input";

const RegisterForm = () => {
	const nameInput = useRef();
	const emailInput = useRef();
	const passwordInput = useRef();
	const password2Input = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		console.log(emailInput.current.value);
		console.log(passwordInput.current.value);
	};

	return (
		<form className='w-full mx-auto max-w-sm' onSubmit={handleSubmit}>
			<div>
				<label className='block p-2 font-light text-xl' htmlFor='name'>
					Name
				</label>
				<Input
					name='name'
					type='text'
					id='name'
					placeholder='Name...'
					ref={nameInput}
				/>
			</div>
			<div>
				<label className='block p-2 font-light text-xl' htmlFor='email'>
					Email
				</label>
				<Input
					name='email'
					type='email'
					id='email'
					placeholder='Email...'
					ref={emailInput}
				/>
			</div>
			<div>
				<label className='block p-2 font-light text-xl' htmlFor='pasword'>
					Password
				</label>
				<Input
					name='password'
					type='password'
					id='password'
					placeholder='Password...'
					ref={passwordInput}
				/>
			</div>
			<div>
				<label className='block p-2 font-light text-xl' htmlFor='pasword2'>
					Confirm password
				</label>
				<Input
					name='password2'
					type='password'
					id='password2'
					placeholder='Confirm password...'
					ref={password2Input}
				/>
			</div>
			<Button
				type='submit'
				className='bg-primary-700 text-white rounded w-full mt-5'
			>
				Register
			</Button>
		</form>
	);
};

export default RegisterForm;
