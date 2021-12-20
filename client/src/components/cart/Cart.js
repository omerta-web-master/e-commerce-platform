import React from "react";
import useCart from "./useCart";
import CartItemList from "./CartItemList";
import Alert from "../utilities/Alert";

const Cart = () => {
	const { handleOnClick, cartProducts } = useCart();

	return (
		<>
			<h1 className='text-3xl font-semibold text-center my-14'>
				Shopping cart
			</h1>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='flex-1'>
					<CartItemList />
				</div>
				<div className='flex-1'>
					<div className='max-w-sm shadow-lg p-5 bg-white'>
						<Alert />
						<h1>
							Subtotal (
							{cartProducts.reduce(
								(acc, item) => acc + Number(item.quantity),
								0
							)}
							) items
						</h1>
						<p className='my-3'>
							TOTAL: $
							{cartProducts.reduce(
								(acc, item) => acc + item.price * item.quantity,
								0
							)}
						</p>
						<button
							onClick={handleOnClick}
							className='py-2 w-full hover:opacity-75 transition-opacity block text-center uppercase bg-primary-700 text-white'
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
