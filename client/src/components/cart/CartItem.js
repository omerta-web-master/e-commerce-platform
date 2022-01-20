import React from "react";
import { BASE_URL } from "../../services/api/base";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
	incrementQuantity,
	decrementQuantity,
} from "../../actions/cartActions";

const CartItem = ({ product, handleRemoveItem }) => {
	const { img, name, price, _id, quantity } = product;

	const dispatch = useDispatch();

	return (
		<div className='flex shadow-md items-center mb-1 justify-between gap-5 bg-white pr-4'>
			<div style={{ maxWidth: "100px" }}>
				<img className='w-full' src={BASE_URL + `/${img}`} alt='' />
			</div>
			<Link to={`/products/${_id}`} className='w-40 font-light text-center'>
				{name}
			</Link>
			<div className='flex items-center justify-center gap-1'>
				<button onClick={() => dispatch(decrementQuantity(_id))}>
					<AiOutlineMinus />
				</button>
				<span className='px-2 py-1 bg-white border border-black'>
					{quantity}
				</span>
				<button onClick={() => dispatch(incrementQuantity(_id))}>
					<AiOutlinePlus />
				</button>
			</div>
			<span>${price}</span>
			<button
				onClick={() => {
					handleRemoveItem(_id);
				}}
			>
				<BsTrashFill />
			</button>
		</div>
	);
};

export default CartItem;
