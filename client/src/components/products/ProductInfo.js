import React from "react";
import Rating from "./Rating";

const ProductInfo = ({ product }) => {
	const { rating, price, name, description } = product;

	return (
		<div className='border-b border-gray-400 pb-5'>
			<h1>{name}</h1>
			<Rating rating={rating} />
			<h2 className='text-xl font-medium'>Price: ${price}</h2>
			<p className='py-3 font-light'>{description}</p>
		</div>
	);
};

export default ProductInfo;
