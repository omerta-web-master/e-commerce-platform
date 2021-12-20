import React, { useEffect } from "react";
import { getProduct } from "../../actions/productActions";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/utilities/Spinner";
import EditProduct from "../../components/admin/Products/EditProduct";

const EditProductScreen = () => {
	const { id } = useParams();

	const { product, loading, error } = useSelector(
		state => state.productDetails
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(id));
	}, [dispatch, id]);

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-center text-2xl m-10'>
				Something went wrong: {error}
			</h1>
		);
	}

	return (
		<div>
			<h1 className='text-center text-3xl my-10'>Edit product</h1>
			<EditProduct product={product} />
		</div>
	);
};

export default EditProductScreen;
