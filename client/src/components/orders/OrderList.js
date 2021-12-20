import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => {
	if (orders.length === 0) {
		return <h1 className='text-center text-xl m-5'>No orders</h1>;
	}

	return (
		<ul className='divide-y divide-gray-300 bg-white mx-auto max-w-4xl p-10 shadow-xl overflow-x-auto'>
			{orders.map(order => {
				return <OrderListItem key={order._id} order={order} />;
			})}
		</ul>
	);
};

export default OrderList;
