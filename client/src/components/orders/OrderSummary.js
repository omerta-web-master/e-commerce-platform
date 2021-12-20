import React from "react";

const OrderSummary = ({ order }) => {
	const { itemsPrice, shippingPrice, taxPrice, totalPrice } = order;
	return (
		<>
			<h1 className='text-3xl text-center uppercase my-5'>ORDER SUMMARY</h1>
			<ul>
				<li className='flex'>
					<strong className='flex-1'>Items</strong>
					<span className='flex-1'>${itemsPrice}</span>
				</li>
				<li className='flex'>
					<strong className='flex-1'>Shipping</strong>
					<span className='flex-1'>${shippingPrice}</span>
				</li>
				<li className='flex'>
					<strong className='flex-1'>Tax:</strong>
					<span className='flex-1'>${taxPrice}</span>
				</li>
				<li className='flex mt-5'>
					<strong className='flex-1'>TOTAL:</strong>
					<span className='flex-1'>${totalPrice}</span>
				</li>
			</ul>
		</>
	);
};

export default OrderSummary;
