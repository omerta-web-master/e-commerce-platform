import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router";

const Login = () => {
	const { isAuthenticated } = useSelector(state => state.auth);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate(-1);
		}
	}, [navigate, isAuthenticated]);

	return (
		<div className='pt-20'>
			<h1 className='text-3xl text-center'>Login</h1>
			<LoginForm />
		</div>
	);
};

export default Login;
