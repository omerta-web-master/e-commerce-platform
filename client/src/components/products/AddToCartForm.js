import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../utilities/Button";
import { addProductToCart } from "../../actions/cartActions";
import setAlert from "../../actions/alertActions";
import Alert from "../../components/utilities/Alert";

const AddToCartForm = ({ product }) => {
	const { price, countInStock } = product;
	const [quantity, setQuantity] = useState(1);
	const [isDisabled, setIsDisabled] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		if (countInStock <= 0) {
			setIsDisabled(true);
		}
	}, [countInStock]);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			addProductToCart({
				...product,
				quantity,
			})
		);
		dispatch(setAlert("Product added to cart!", "success"));
	};

	const handleOnChange = e => {
		if (e.target.value <= 0 || e.target.value > Number(countInStock)) {
			return;
		}
		setQuantity(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Alert />
			<div
				className='bg-white shadow-md p-5 mt-5'
				style={{ maxWidth: "200px" }}
			>
				<div className='flex justify-between'>
					<span>Price</span>
					<span>${price}</span>
				</div>
				<div className='flex justify-between my-2'>
					<span>Items left:</span>
					<span>{countInStock}</span>
				</div>
				<div className='flex justify-between'></div>
				<div className='flex justify-between'>
					<span>Quantity:</span>
					<div>
						<input
							className='w-full'
							style={{ maxWidth: "50px" }}
							value={quantity}
							onChange={handleOnChange}
							type='number'
						/>
					</div>
				</div>
			</div>

			<Button
				type='submit'
				disabled={isDisabled}
				className={`bg-primary-600 text-white m-5 ${
					isDisabled ? "hover:opacity-100 cursor-not-allowed" : ""
				}`}
			>
				Add to cart
			</Button>
		</form>
	);
};

export default AddToCartForm;
