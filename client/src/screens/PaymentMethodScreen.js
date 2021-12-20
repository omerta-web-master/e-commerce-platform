import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/utilities/Button";
import { useNavigate } from "react-router";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/checkout/CheckoutSteps";

const PaymentMethodScreen = () => {
	const [paymentMethod, setPaymentmethod] = useState("paypal");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);

	useEffect(() => {
		if (!cart.shippingAddress) {
			navigate("/shipping");
		}
	}, [cart.shippingAddress, navigate]);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate("/placeorder");
	};

	const handleOnChange = e => {
		setPaymentmethod(e.target.value);
	};
	return (
		<div>
			<CheckoutSteps step1 step2 step3 />
			<h1 className='text-center text-3xl font-semibold uppercase my-10'>
				Payment method
			</h1>
			<form className='max-w-md mx-auto'>
				<div className='flex items-center gap-3'>
					<input
						className='w-5 h-5'
						type='radio'
						id='paypal'
						value='paypal'
						checked={paymentMethod === "paypal"}
						name='paymentMethod'
						onChange={handleOnChange}
					/>
					<label htmlFor='paypal' className='text-xl'>
						Paypal
					</label>
				</div>
				<Button
					type='submit'
					onClick={handleSubmit}
					className='mt-5 bg-primary-900 text-white'
				>
					Continue
				</Button>
			</form>
		</div>
	);
};

export default PaymentMethodScreen;
