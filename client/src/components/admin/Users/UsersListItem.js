import React from "react";
import { useDispatch } from "react-redux";
import { AiFillCloseSquare, AiFillCheckSquare } from "react-icons/ai";
import { setCurrentUser } from "../../../actions/usersActions";

const UsersListItem = ({ user }) => {
	const { name, email, isAdmin } = user;

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentUser(user));
	};

	return (
		<tr className='bg-primary-50 cursor-pointer' onClick={handleClick}>
			<td>{name}</td>
			<td>{email}</td>
			<td>
				{isAdmin ? (
					<AiFillCheckSquare className='text-3xl text-green-500' />
				) : (
					<AiFillCloseSquare className='text-3xl text-red-500' />
				)}
			</td>
		</tr>
	);
};

export default UsersListItem;
