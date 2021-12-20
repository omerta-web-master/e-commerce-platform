import React from "react";
import UsersListItem from "./UsersListItem";
import "./UsersList.css";

const UsersList = ({ users }) => {
	if (users.length === 0) {
		return <h1 className='text-center text-xl mt-10'>No users</h1>;
	}

	return (
		<table className='users_list_table bg-white shadow-md border'>
			<thead className='border-b-4'>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Is Admin</th>
				</tr>
			</thead>
			<tbody className='divide-y divide-gray-400'>
				{users?.map(user => {
					return <UsersListItem key={user._id} user={user} />;
				})}
			</tbody>
		</table>
	);
};

export default UsersList;
