import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Alert from "../../utilities/Alert";
import setAlert from "../../../actions/alertActions";

const EditUserForm = ({ user, isEditing, handleUpdateUser }) => {
	const [updatedUser, setUpdatedUser] = useState({
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
	});
	const { name, email, isAdmin } = updatedUser;

	const dispatch = useDispatch();

	useEffect(() => {
		setUpdatedUser({
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	}, [user]);

	const handleOnChange = e => {
		console.log(e.target.value);
		setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (name.trim() === "") {
			return dispatch(setAlert("Please enter name", "danger"));
		}

		if (
			user.name === name &&
			user.email === email &&
			user.isAdmin === isAdmin
		) {
			return dispatch(setAlert("No changes", "info"));
		}
		handleUpdateUser(updatedUser);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Alert />
			<div className='mb-5'>
				<label htmlFor='name' className='m-3 text-xl font-light'>
					Name
				</label>
				<Input
					value={name}
					type='text'
					name='name'
					id='name'
					onChange={handleOnChange}
					disabled={!isEditing}
				/>
			</div>
			<div className='mb-5'>
				<label htmlFor='email' className='m-3 text-xl font-light'>
					Email
				</label>
				<Input
					value={email}
					type='email'
					name='email'
					id='email'
					onChange={handleOnChange}
					disabled={!isEditing}
				/>
			</div>
			<div>
				<label htmlFor='isAdmin' className='block'>
					Admin
				</label>
				<input
					type='checkbox'
					checked={isAdmin}
					onChange={e => {
						setUpdatedUser({ ...updatedUser, isAdmin: !updatedUser.isAdmin });
					}}
					disabled={!isEditing}
				/>
			</div>
			{isEditing && (
				<Button
					type='submit'
					className='bg-yellow-500 text-white mx-auto block'
				>
					Update
				</Button>
			)}
		</form>
	);
};

export default EditUserForm;
