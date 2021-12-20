import React from "react";

const Message = ({ className, msg }) => {
	return (
		<p
			className={`w-full my-4 text-center py-3 px-5 text-xl capitalize font-light ${className}`}
		>
			{msg}
		</p>
	);
};

export default Message;
