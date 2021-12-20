import React, { useState } from "react";
import Button from "../../utilities/Button";
import Input from "../../utilities/Input";
import Alert from "../../utilities/Alert";

const ProductForm = ({ product, handleSubmit, isEditing }) => {
	const [newProduct, setNewProduct] = useState({
		name: product ? product.name : "",
		price: product ? product.price : 0,
		brand: product ? product.brand : "",
		category: product ? product.category : "",
		description: product ? product.description : "",
		countInStock: product ? product.countInStock : 0,
		img: product ? product.img : null,
	});
	const [file, setFile] = useState(null);

	const { name, price, brand, category, description, countInStock, img } =
		newProduct;

	const handleOnChange = e => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};

	const handleOnChangeFile = e => {
		setFile(e.target.files[0]);
	};

	return (
		<form
			className='w-full max-w-md mx-auto px-10 py-5 bg-primary-50 shadow-xl rounded-lg'
			onSubmit={e => {
				e.preventDefault();
				handleSubmit(newProduct, file);
			}}
		>
			<Alert />
			<div>
				<label htmlFor='name'>Name</label>
				<Input
					type='text'
					name='name'
					id='name'
					placeholder='Enter product name...'
					value={name}
					onChange={handleOnChange}
				/>
			</div>
			<div>
				<label htmlFor='description'>Description</label>
				<textarea
					className='w-full py-2 px-4 bg-gray-100 outline-none focus:ring-4 focus:ring-blue-300'
					rows='5'
					placeholder='Enter product description...'
					type='text'
					name='description'
					id='description'
					value={description}
					onChange={handleOnChange}
				></textarea>
			</div>
			<div>
				<label htmlFor='image'>Image</label>
				<p className='font-light text-md'>Current image: {img ? img : "N/A"}</p>
				<input
					type='file'
					id='image'
					accept='.jpeg, .jpg, .png'
					onChange={handleOnChangeFile}
				/>
			</div>
			<div>
				<label htmlFor='price'>Price</label>
				<Input
					type='number'
					name='price'
					id='price'
					value={price}
					onChange={handleOnChange}
				/>
			</div>
			<div>
				<label htmlFor='brand'>Brand</label>
				<Input
					type='text'
					name='brand'
					placeholder='Enter product brand...'
					id='brand'
					value={brand}
					onChange={handleOnChange}
				/>
			</div>
			<div>
				<label htmlFor='category'>Category</label>
				<Input
					type='text'
					name='category'
					id='category'
					placeholder='Enter product category...'
					value={category}
					onChange={handleOnChange}
				/>
			</div>
			<div>
				<label htmlFor='countInStock'>Count In Stock</label>
				<Input
					type='number'
					name='countInStock'
					id='countInStock'
					value={countInStock}
					onChange={handleOnChange}
				/>
			</div>
			<Button
				type='submit'
				className='bg-primary-800 text-white block mx-auto mt-5'
			>
				{isEditing ? "Update" : "Create"}
			</Button>
		</form>
	);
};

export default ProductForm;
