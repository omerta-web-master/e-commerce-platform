import React from "react";
import "./CartNavLink.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const CartNavLink = () => {
	const { cartProducts } = useSelector(state => state.cart);
	return (
		<Link to='/cart' className='flex gap-2 items-center'>
			<div className='relative'>
				<FiShoppingCart className='text-2xl' />
				<span className='cart_total'>{cartProducts.length}</span>
			</div>
			<span>Cart</span>
		</Link>
	);
};

export default CartNavLink;
