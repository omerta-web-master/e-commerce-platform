import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BsSearch } from "react-icons/bs";
import Input from "../utilities/Input";

const SearchProductsBar = () => {
	const { keyword: keywordUrlValue } = useParams();

	const [keyword, setKeyword] = useState(keywordUrlValue || "");
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		console.log("submit");
		if (keyword === "") {
			navigate("/products");
		} else {
			navigate(`/products/search/${keyword}`);
		}
	};

	const handleOnChange = e => {
		setKeyword(e.target.value);
	};

	return (
		<form className='' onSubmit={handleSubmit}>
			<div className='flex items-center gap-4'>
				<Input
					className='w-full max-w-md my-5 text-black'
					placeholder='Search for product...'
					value={keyword}
					onChange={handleOnChange}
				/>
				<button
					className='hover:scale-110 transform transition-transform'
					type='submit'
				>
					<BsSearch className='text-3xl' />
				</button>
			</div>
		</form>
	);
};

export default SearchProductsBar;
