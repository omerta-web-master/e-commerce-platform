import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../utilities/Button";
import Input from "../utilities/Input";
import { register } from "../../actions/authActions";
import Alert from "../utilities/Alert";
import setAlert from "../../actions/alertActions";
import { CLEAR_ERROR } from "../../reducers/auth/type";
import { useNavigate } from "react-router";

const RegisterForm = () => {
	const nameInput = useRef();
	const emailInput = useRef();
	const passwordInput = useRef();
	const password2Input = useRef();

	const { loading, error, isAuthenticated } = useSelector(state => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (error) {
			dispatch({ type: CLEAR_ERROR });
			dispatch(setAlert(error, "danger"));
		}
	}, [error, dispatch]);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, navigate]);

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Click");
		const name = nameInput.current.value;
		const email = emailInput.current.value;
		const password = passwordInput.current.value;

		if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
			return dispatch(setAlert("Please fill out all the fields", "danger"));
		}

		dispatch(register({ name, email, password }));
	};

	return (
		<form className='w-full mx-auto max-w-sm' onSubmit={handleSubmit}>
			<Alert />
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
