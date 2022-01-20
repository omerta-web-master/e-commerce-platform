import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/utilities/Container";
import Spinner from "../components/utilities/Spinner";
import AddToCartForm from "../components/products/AddToCartForm";
import ProductInfo from "../components/products/ProductInfo";
import { getProduct } from "../actions/productActions";
import { PRODUCT_DETAILS_RESET } from "../reducers/products/types";
import { BASE_URL } from "../services/api/base";

const ProductScreen = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const productDetails = useSelector(state => state.productDetails);
	const { product, loading, error } = productDetails;

	useEffect(() => {
		dispatch(getProduct(id));
		return () => {
			dispatch({ type: PRODUCT_DETAILS_RESET });
		};
	}, [dispatch, id]);

	const { img } = product;

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

	return (
		<Container>
			<div className='flex md:flex-row flex-col gap-5'>
				<div className='flex-1'>
					<img className='w-full' src={BASE_URL + `/${img}`} alt='' />
				</div>
				<div className='flex-1 p-5'>
					<ProductInfo product={product} />

					<AddToCartForm product={product} />
				</div>
			</div>
		</Container>
	);
};

export default ProductScreen;
