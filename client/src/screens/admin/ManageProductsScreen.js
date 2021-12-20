import React, { useEffect } from "react";
import Container from "../../components/utilities/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Spinner from "../../components/utilities/Spinner";
import ProductsTable from "../../components/admin/Products/ProductsTable";
import Button from "../../components/utilities/Button";
import { useNavigate } from "react-router";
import Alert from "../../components/utilities/Alert";

const ManageProductsScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { products, error, loading } = useSelector(state => state.productList);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<h1 className='text-center text-xl m-10'>
				Something went wrong: {error}
			</h1>
		);
	}

	return (
		<Container>
			<h1 className='text-center text-3xl my-10'>Manage products</h1>
			<Button
				className='bg-primary-700 m-5 text-white'
				onClick={() => {
					navigate("/admin/manageproducts/createproduct");
				}}
			>
				Create product
			</Button>
			<div className='overflow-x-auto'>
				<Alert />
				<ProductsTable products={products} />
			</div>
		</Container>
	);
};

export default ManageProductsScreen;
