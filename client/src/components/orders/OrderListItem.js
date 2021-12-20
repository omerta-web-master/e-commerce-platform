import React from "react";
import { useNavigate } from "react-router";
import { AiFillShopping } from "react-icons/ai";

const OrderListItem = ({ order }) => {
	const { _id, totalPrice, isDelivered, isPaid, createdAt } = order;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/order/${_id}`);
	};

	return (
		<li
			className='cursor-pointer flex items-center gap-2'
			onClick={handleClick}
		>
			<AiFillShopping className='text-3xl text-secondary-700 flex-shrink-0' />
			<div className='flex items-center justify-between gap-4 py-2'>
				<p className='w-full max-w-xs font-light'>
					<span className='font-semibold'>Order </span>: {_id}
				</p>
				<p className=''>{isDelivered ? "Delivered" : "Not delivered"}</p>
				<p className=''>{isPaid ? "Paid" : "Not paid"}</p>
				<p className=''>{createdAt}</p>
				<p className=''>${totalPrice}</p>
			</div>
		</li>
	);
};

export default OrderListItem;
