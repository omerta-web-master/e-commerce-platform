import React from "react";
import ProductForm from "./ProductForm";
import useCreateProduct from "./useCreateProduct";

const CreateProduct = () => {
	const { createProduct } = useCreateProduct();

	const handleSubmit = (newProduct, file) => {
		createProduct(newProduct, file);
	};

	return <ProductForm handleSubmit={handleSubmit} />;
};

export default CreateProduct;
