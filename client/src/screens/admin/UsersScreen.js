import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/usersActions";
import { getOrders } from "../../actions/orderAction";
import UsersList from "../../components/admin/Users/UsersList";
import Spinner from "../../components/utilities/Spinner";
import Container from "../../components/utilities/Container";
import SearchUsersBar from "../../components/admin/Users/SearchUsersBar";
import UserDetails from "../../components/admin/Users/UserDetails";
import OrderList from "../../components/orders/OrderList";

const UsersScreen = () => {
	const dispatch = useDispatch();

	const { users, loading, error } = useSelector(state => state.usersGetAll);
	const { currentUser } = useSelector(state => state.userDetails);

	const { orders, loading: loadingOrders } = useSelector(
		state => state.orderGetAll
	);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	useEffect(() => {
		if (currentUser) {
			dispatch(getOrders(currentUser?._id));
		}
	}, [currentUser, dispatch]);

	if (loading) {
		return (
			<div className='flex items-center justify-center w-full h-screen'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-center text-3xl mt-10'>
				Something went wrong: {error}
			</h1>
		);
	}

	return (
		<Container>
			<SearchUsersBar />
			<div className='flex flex-col 2xl:flex-row gap-5'>
				<div className='flex justify-center flex-col gap-5 mt-5 md:flex-row'>
					<div>
						<UsersList users={users} />
					</div>
					<div>
						<UserDetails />
					</div>
				</div>

				<div>
					{loadingOrders ? (
						<div className='flex items-center justify-center h-60 w-96'>
							<Spinner />
						</div>
					) : (
						<OrderList orders={orders} />
					)}
				</div>
			</div>
		</Container>
	);
};

export default UsersScreen;
