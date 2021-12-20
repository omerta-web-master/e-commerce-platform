import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	const { type, onChange, value, placeholder, className, name, id, disabled } =
		props;

	return (
		<>
			<input
				className={`${className} w-full py-2 px-4 bg-white font-light shadow-sm rounded outline-none focus:ring-4 focus:ring-blue-300 mb-3`}
				placeholder={placeholder}
				value={value}
				name={name}
				id={id}
				ref={ref}
				onChange={onChange}
				type={type}
				disabled={disabled}
			/>
		</>
	);
});

export default Input;
