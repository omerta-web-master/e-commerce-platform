import React from "react";
import ProductListItem from "./ProductListItem";

const ProductsList = ({ products }) => {
	return (
		<div className='grid xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-5 my-10'>
			{products.map(product => {
				return <ProductListItem key={product._id} product={product} />;
			})}
		</div>
	);
};

export default ProductsList;
