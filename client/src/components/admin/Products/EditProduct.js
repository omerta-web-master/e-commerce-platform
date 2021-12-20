import React from "react";
import useEditProduct from "./useEditProduct";
import ProductForm from "./ProductForm";

const EditProduct = ({ product }) => {
	const { updateProduct } = useEditProduct();

	const handleSubmit = (newProduct, file) => {
		updateProduct(newProduct, file);
	};

	return (
		<ProductForm
			isEditing={true}
			product={product}
			handleSubmit={handleSubmit}
		/>
	);
};

export default EditProduct;
