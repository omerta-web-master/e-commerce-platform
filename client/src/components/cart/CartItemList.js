import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeProductFromCart } from "../../actions/cartActions";

const CartItemList = () => {
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);
	const { cartProducts } = cart;

	const handleRemoveItem = id => {
		dispatch(removeProductFromCart(id));
	};

	useEffect(() => {
		localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
	}, [cartProducts]);

	if (cartProducts.length === 0) {
		return <h1 className='text-xl text-center mt-10'>Cart is empty...</h1>;
	}

	return (
		<>
			{cartProducts.map(product => {
				return (
					<CartItem
						key={product._id}
						product={product}
						handleRemoveItem={handleRemoveItem}
					/>
				);
			})}
		</>
	);
};

export default CartItemList;
