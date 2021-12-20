import React from "react";

const Button = ({ onClick, className, children, disabled }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`py-2 px-5 hover:opacity-75 transition-opacity ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
