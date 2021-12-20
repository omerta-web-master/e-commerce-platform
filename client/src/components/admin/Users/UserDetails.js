import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUserForm from "./EditUserForm";
import Button from "../../utilities/Button";
import { getUsers, updateUser } from "../../../actions/usersActions";
import { UPDATE_USER_RESET } from "../../../reducers/users/types";
import { setCurrentUser } from "../../../actions/usersActions";
import Spinner from "../../utilities/Spinner";

const UserDetails = () => {
	const [isEditing, setIsEditing] = useState(false);

	const { currentUser } = useSelector(state => state.userDetails);
	const { updatedUser, loading, error } = useSelector(
		state => state.userUpdate
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (updatedUser) {
			dispatch(setCurrentUser(updatedUser));
			dispatch({ type: UPDATE_USER_RESET });
			dispatch(getUsers());
			setIsEditing(false);
		}
	}, [updatedUser, dispatch]);

	useEffect(() => {
		setIsEditing(false);
	}, [currentUser]);

	const handleUpdateUser = data => {
		dispatch(updateUser(currentUser._id, data));
	};

	if (!currentUser) {
		return <h1 className='text-center text xl m-10'>No user selected</h1>;
	}

	if (loading) {
		return (
			<div className='flex items-center justify-center w-96 h-60'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-xl text-center m-5'>Something went wrong: {error}</h1>
		);
	}

	return (
		<div className='shadow-xl p-10'>
			<h1 className='text-center text-xl text light mb-5'>User details</h1>
			<EditUserForm
				user={currentUser}
				handleUpdateUser={handleUpdateUser}
				isEditing={isEditing}
			/>
			<div>
				{!isEditing && (
					<Button
						className='bg-green-700 text-white block mx-auto'
						onClick={() => {
							setIsEditing(true);
						}}
					>
						Edit
					</Button>
				)}
			</div>
		</div>
	);
};

export default UserDetails;
