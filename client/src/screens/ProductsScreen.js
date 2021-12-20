import React from "react";
import useProducts from "../components/products/useProducts";
import ProductsList from "../components/products/ProductsList";
import SearchProductsBar from "../components/products/SearchProductsBar";
import Container from "../components/utilities/Container";
import Spinner from "../components/utilities/Spinner";

const ProductsScreen = () => {
	const { products, loading, error } = useProducts();

	if (loading) {
		return (
			<div className='flex h-96 items-center justify-center w-full'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-center text-3xl mt-20'>
				Something went wrong: {error}
			</h1>
		);
	}

	if (products.length === 0) {
		return <h1 className='text-center text-3xl mt-20'>No products</h1>;
	}

	return (
		<Container>
			<div className='mt-10'>
				<SearchProductsBar />
				<ProductsList products={products} />
			</div>
		</Container>
	);
};

export default ProductsScreen;
