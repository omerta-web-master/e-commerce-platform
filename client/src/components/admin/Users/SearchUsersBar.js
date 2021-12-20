import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../../utilities/Input";
import { BsSearch } from "react-icons/bs";
import { getUsers } from "../../../actions/usersActions";

const SearchUsersBar = () => {
	const inputEl = useRef();

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(getUsers(inputEl.current.value));
	};

	return (
		<form className='' onSubmit={handleSubmit}>
			<div className='flex items-center gap-4'>
				<Input
					className='w-full max-w-md my-5 text-black'
					placeholder='Search user...'
					ref={inputEl}
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

export default SearchUsersBar;
