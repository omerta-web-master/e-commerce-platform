import React, { useEffect } from "react";
import ProductsList from "../components/products/ProductsList";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Container from "../components/utilities/Container";
import SearchProductsBar from "../components/products/SearchProductsBar";
import Spinner from "../components/utilities/Spinner";

const SearchProductScreen = () => {
	const { keyword } = useParams();

	const { products, error, loading } = useSelector(state => state.productList);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(keyword);
		dispatch(getProducts(keyword));
	}, [dispatch, keyword]);

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
			<SearchProductsBar />
			<ProductsList products={products} />
		</Container>
	);
};

export default SearchProductScreen;
