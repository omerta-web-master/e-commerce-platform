import React from "react";
import OrderProductListItem from "./OrderProductListitem";

const OrderProductList = ({ orderItems }) => {
	return (
		<ul className='max-w-md divide-y-2'>
			{orderItems.map(product => {
				return <OrderProductListItem key={product._id} product={product} />;
			})}
		</ul>
	);
};

export default OrderProductList;
