import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/utilities/Input";

const UserProfile = () => {
	const { currentUser } = useSelector(state => state.auth);

	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<form action='' className='max-w-sm -mt-40 mx-auto'>
				<div>
					<label htmlFor='name'>Name</label>
					<Input value={currentUser.name} id='name' disabled={true} />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<Input value={currentUser.email} id='email' disabled={true} />
				</div>
			</form>
		</div>
	);
};

export default UserProfile;
