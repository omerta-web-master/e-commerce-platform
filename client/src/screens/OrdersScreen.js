import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderAction";
import Spinner from "../components/utilities/Spinner";
import Container from "../components/utilities/Container";
import OrderList from "../components/orders/OrderList";
import { GET_ORDERS_RESET } from "../reducers/orders/types";

const OrdersScreen = () => {
	const { currentUser } = useSelector(state => state.auth);
	const { orders, loading, error } = useSelector(state => state.orderGetAll);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrders(currentUser._id));
		return () => {
			dispatch({ type: GET_ORDERS_RESET });
		};
	}, [dispatch, currentUser._id]);

	if (loading) {
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Spinner />;
			</div>
		);
	}

	if (error) {
		return <h1 className='text-xl m-10'>Something went wrong: {error}</h1>;
	}

	return (
		<Container>
			<h1 className='text-3xl text-center m-10 font-light'>My orders</h1>
			<div>
				{orders.length === 0 ? (
					<h1 className='text-center text-xl'>No orders</h1>
				) : (
					<OrderList orders={orders} />
				)}
			</div>
		</Container>
	);
};

export default OrdersScreen;
