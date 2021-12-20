import React from "react";
import ProductsTableItem from "./ProductsTableItem";
import "./ProductsTable.css";

const ProductsTable = ({ products }) => {
	return (
		<table className='products_table bg-white shadow-xl mx-auto'>
			<thead className='border-b-4 border-gray-400'>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Price</th>
					<th>Stock</th>
					<th>Brand</th>
					<th>Category</th>
					<th>User</th>
					<th></th>
				</tr>
			</thead>
			<tbody className='divide-y divide-gray-400'>
				{products.map(product => {
					return <ProductsTableItem key={product._id} product={product} />;
				})}
			</tbody>
		</table>
	);
};

export default ProductsTable;
