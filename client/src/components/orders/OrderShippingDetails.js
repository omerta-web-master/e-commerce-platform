import React from "react";

const OrderShippingDetails = ({ shippingAddress }) => {
	const { address, city, postalCode, country } = shippingAddress;
	return (
		<>
			<h2 className='text-2xl my-5 font-light uppercase'>shipping</h2>
			<p>
				<strong>Shipping address: </strong>
				{shippingAddress &&
					`${address},
						${city},
						${postalCode},
						${country}`}
			</p>
		</>
	);
};

export default OrderShippingDetails;
