import React from "react";
import CreateProduct from "../../components/admin/Products/CreateProduct";
import Container from "../../components/utilities/Container";

const CreateProductScreen = () => {
	return (
		<Container>
			<h1 className='text-center text-2xl my-5'>Create product</h1>
			<CreateProduct />
		</Container>
	);
};

export default CreateProductScreen;
