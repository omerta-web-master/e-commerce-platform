import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../utilities/Button";
import Input from "../utilities/Input";
import { login, clearError } from "../../actions/authActions";
import setAlert from "../../actions/alertActions";
import Alert from "../utilities/Alert";

const LoginForm = () => {
	const emailInput = useRef();
	const passwordInput = useRef();

	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if (auth.error) {
			dispatch(setAlert(auth.error, "danger"));
			dispatch(clearError());
		}
	}, [auth.error, dispatch]);

	const handleSubmit = e => {
		e.preventDefault();
		const email = emailInput.current.value;
		const password = passwordInput.current.value;

		if (email.trim() === "" || password.trim() === "") {
			return dispatch(setAlert("Please fill out all the fields", "danger"));
		}

		dispatch(login({ email, password }));
	};

	return (
		<form className='w-full mx-auto max-w-sm' onSubmit={handleSubmit}>
			<Alert />
			<div>
				<label className='block p-2 font-light text-xl' htmlFor='email'>
					Email
				</label>
				<Input
					name='email'
					type='email'
					id='email'
					ref={emailInput}
					placeholder='Email...'
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
			<Button
				type='submit'
				className='bg-primary-700 text-white rounded w-full mt-5'
			>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
