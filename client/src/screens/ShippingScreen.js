import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/utilities/Button";
import Input from "../components/utilities/Input";
import Alert from "../components/utilities/Alert";
import setAlert from "../actions/alertActions";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import { useNavigate } from "react-router";

const ShippingScreen = () => {
	const addressInput = useRef();
	const cityInput = useRef();
	const postalCodeInput = useRef();
	const countryInput = useRef();

	const cart = useSelector(state => state.cart);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (cart.cartProducts.length === 0) {
			navigate("/");
		}
	}, [cart.cartProducts, navigate]);

	const handleSubmit = e => {
		e.preventDefault();

		const address = addressInput.current.value;
		const city = cityInput.current.value;
		const postalCode = postalCodeInput.current.value;
		const country = countryInput.current.value;

		if (
			!address.trim() ||
			!city.trim() ||
			!postalCode.trim() ||
			!country.trim()
		) {
			return dispatch(setAlert("Please fill out all the fields...", "danger"));
		}

		dispatch(
			saveShippingAddress({
				address,
				city,
				postalCode,
				country,
			})
		);

		navigate("/paymentmethod");
	};

	return (
		<div>
			<CheckoutSteps step1 step2 />
			<h1 className='uppercase text-3xl text-center my-10'>Shipping</h1>
			<form className='mx-auto max-w-md' onSubmit={handleSubmit}>
				<Alert />
				<div>
					<label className='block text-xl mb-3 font-light' htmlFor='address'>
						Address
					</label>
					<Input
						className=''
						placeholder='Enter address...'
						ref={addressInput}
						id='address'
					/>
				</div>
				<div>
					<label className='block text-xl mb-3 font-light' htmlFor='city'>
						City
					</label>
					<Input
						className=''
						placeholder='Enter city...'
						ref={cityInput}
						id='city'
					/>
				</div>
				<div>
					<label className='block text-xl mb-3 font-light' htmlFor='postalCode'>
						Postal code
					</label>
					<Input
						className=''
						placeholder='Enter postal code...'
						ref={postalCodeInput}
						id='postalCode'
					/>
				</div>
				<div>
					<label className='block text-xl mb-3 font-light' htmlFor='country'>
						Country
					</label>
					<Input
						className=''
						placeholder='Enter country...'
						ref={countryInput}
						id='country'
					/>
				</div>
				<Button
					type='submit'
					className='bg-primary-900 text-white block mt-5 mx-auto uppercase'
				>
					continue
				</Button>
			</form>
		</div>
	);
};

export default ShippingScreen;
