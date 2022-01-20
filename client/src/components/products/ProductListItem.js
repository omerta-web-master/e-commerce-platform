import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../services/api/base";

const ProductListItem = ({ product }) => {
	const { name, price, rating, img, _id } = product;
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate(`/products/${_id}`);
	};

	return (
		<button
			className='hover:scale-105 transform transition-transform'
			onClick={handleOnClick}
		>
			<div className='max-w-sm bg-white shadow-lg'>
				<div>
					<img src={BASE_URL + `/${img}`} alt='' />
				</div>
				<div className='p-5'>
					<h3 className='text-sm font-semibold'>{name}</h3>
					<div className='flex justify-end'>
						<Rating rating={rating} />
					</div>
					<h2 className='text-sm font-semibold'>${price}</h2>
				</div>
			</div>
		</button>
	);
};

export default ProductListItem;
