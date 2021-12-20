import React from "react";
import Container from "../components/utilities/Container";
import OrderItem from "../components/orders/OrderProductListitem";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Button from "../components/utilities/Button";
import Alert from "../components/utilities/Alert";
import Spinner from "../components/utilities/Spinner";
import OrderSummary from "../components/orders/OrderSummary";
import OrderShippingDetails from "../components/orders/OrderShippingDetails";
import usePlaceOrder from "../components/orders/usePlaceOrder";

const PlaceOrderScreen = () => {
	const {
		handlePlaceOrder,
		itemsPrice,
		shippingPrice,
		taxPrice,
		totalPrice,
		cartProducts,
		error,
		loading,
		shippingAddress,
		paymentMethod,
	} = usePlaceOrder();

	console.log(paymentMethod);

	if (error) {
		return <h1>Something went wrong: {error}</h1>;
	}

	return (
		<Container>
			<CheckoutSteps step1 step2 step3 step4 />
			<div className='flex flex-col items-start gap-10 mt-10 justify-center sm:flex-row'>
				<div className='divide-y'>
					<div className='p-5'>
						{shippingAddress && (
							<OrderShippingDetails shippingAddress={shippingAddress} />
						)}
					</div>
					<div className='p-5'>
						<h2 className='text-2xl my-5 font-light uppercase'>
							Payment method
						</h2>
						<p>
							<strong>Method: </strong>
							{paymentMethod}
						</p>
					</div>
					<div className='p-5'>
						<h2 className='text-2xl my-5 font-light uppercase'>order items</h2>
						<div>
							<ul className='max-w-md divide-y-2'>
								{cartProducts.map(product => {
									return <OrderItem key={product._id} product={product} />;
								})}
							</ul>
						</div>
					</div>
				</div>

				<div className='p-5 border'>
					<OrderSummary
						order={{ itemsPrice, shippingPrice, taxPrice, totalPrice }}
					/>
					<Alert />
					<Button
						onClick={handlePlaceOrder}
						className='uppercase bg-primary-900 text-white w-full mt-5'
					>
						Place order
					</Button>
					{loading && <Spinner />}
				</div>
			</div>
		</Container>
	);
};

export default PlaceOrderScreen;
