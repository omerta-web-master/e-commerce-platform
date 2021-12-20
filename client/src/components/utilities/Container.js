import React from "react";

const Container = ({ children }) => {
	return (
		<div className='px-2 mx-auto' style={{ maxWidth: "1600px" }}>
			{children}
		</div>
	);
};

export default Container;
