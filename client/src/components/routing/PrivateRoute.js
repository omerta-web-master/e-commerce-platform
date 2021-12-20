import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../utilities/Spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const auth = useSelector(state => state.auth);
	const { loading, error, isAuthenticated } = auth;

	if (loading) {
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-3xl m-10 text-center'>
				Something went wrong: {error}
			</h1>
		);
	}

	return !isAuthenticated ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
