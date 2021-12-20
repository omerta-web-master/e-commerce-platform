import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../actions/orderAction";
import OrderList from "../../components/orders/OrderList";
import Spinner from "../../components/utilities/Spinner";
import { GET_ORDERS_RESET } from "../../reducers/orders/types";

const AllOrdersScreen = () => {
	const dispatch = useDispatch();

	const { orders, loading, error } = useSelector(state => state.orderGetAll);

	useEffect(() => {
		dispatch(getOrders());
		return () => {
			dispatch({ type: GET_ORDERS_RESET });
		};
	}, [dispatch]);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-center text-xl m-10'>
				Something went wrong: {error}
			</h1>
		);
	}

	return (
		<div>
			<h1 className='text-center text-3xl my-10'>All orders</h1>
			<OrderList orders={orders} />
		</div>
	);
};

export default AllOrdersScreen;
