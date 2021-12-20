import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<div className='flex gap-10 justify-center my-5'>
			{step1 ? (
				<Link to='/login' className='font-semibold text-lg'>
					Sign in
				</Link>
			) : (
				<h3 className='text-lg font-light'>Sign in</h3>
			)}
			{step2 ? (
				<Link to='/shipping' className='font-semibold text-lg'>
					Shipping
				</Link>
			) : (
				<h3 className='text-lg font-light'>Shipping</h3>
			)}
			{step3 ? (
				<Link to='/paymentmethod' className='font-semibold text-lg'>
					Payment
				</Link>
			) : (
				<h3 className='text-lg font-light'>Payment</h3>
			)}
			{step4 ? (
				<Link to='/placeOrder' className='font-semibold text-lg'>
					Place order
				</Link>
			) : (
				<h3 className='text-lg font-light'>Place order</h3>
			)}
		</div>
	);
};

export default CheckoutSteps;
