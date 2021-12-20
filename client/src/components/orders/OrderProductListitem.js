import React from "react";

const OrderProductListItem = ({ product }) => {
	const { name, price, img, quantity } = product;
	return (
		<li className='flex justify-between items-center w-full'>
			<div style={{ maxWidth: "50px" }}>
				<img src={img} alt='' />
			</div>
			<h2 className='text-lg font-light' style={{ maxWidth: "100px" }}>
				{name}
			</h2>
			<p>{`${quantity} x $${price} = $${quantity * price}`}</p>
		</li>
	);
};

export default OrderProductListItem;
