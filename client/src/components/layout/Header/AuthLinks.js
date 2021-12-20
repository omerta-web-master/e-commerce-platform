import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = () => {
	return (
		<>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link
					to='/register'
					className='py-2 px-5 rounded bg-primary-700 text-white hover:opacity-75 transition-opacity'
				>
					Sign Up
				</Link>
			</li>
		</>
	);
};

export default AuthLinks;
