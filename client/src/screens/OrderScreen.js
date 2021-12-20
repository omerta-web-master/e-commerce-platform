import React from "react";
import useOrder from "../components/orders/useOrder";
import useOrderUpdate from "../components/orders/useOrderUpdate";
import Container from "../components/utilities/Container";
import { useSelector } from "react-redux";
import Spinner from "../components/utilities/Spinner";
import OrderSummary from "../components/orders/OrderSummary";
import Message from "../components/utilities/Message";
import { PayPalButton } from "react-paypal-button-v2";
import OrderProductList from "../components/orders/OrderProductList";
import OrderShippingDetails from "../components/orders/OrderShippingDetails";
import Button from "../components/utilities/Button";

const OrderScreen = () => {
	const {
		onSuccessHandler,
		loadingOrderDetails,
		error: errorGetDetails,
		loadingPay,
		order,
	} = useOrder();
	const { handleOrderUpdate, error: errorUpdate } = useOrderUpdate();
	const { currentUser } = useSelector(state => state.auth);

	if (loadingOrderDetails) {
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Spinner />;
			</div>
		);
	}

	if (errorGetDetails || errorUpdate) {
		return (
			<h1 className='text-xl m-10'>
				Something went wrong: {errorGetDetails ? errorGetDetails : errorUpdate}{" "}
			</h1>
		);
	}

	const {
		shippingAddress,
		totalPrice,
		paymentMethod,
		_id,
		isPaid,
		isDelivered,
		orderItems,
		paidAt,
	} = order;

	return (
		<Container>
			<h1 className='text-3xl text-gray-700 m-10 font-light uppercase'>
				order: {_id}
			</h1>
			<div className='flex flex-col-reverse items-center sm:items-start gap-10 mt-10 justify-center sm:flex-row'>
				<div className='divide-y'>
					<div className='p-5'>
						<OrderShippingDetails shippingAddress={shippingAddress} />
						{isDelivered ? (
							<Message className='bg-green-300 text-black' msg='Delivered' />
						) : (
							<Message className='bg-red-300 text-black' msg='Not Delivered' />
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
						{isPaid ? (
							<Message
								className='bg-green-300 text-black'
								msg={`Paid at: ${paidAt}`}
							/>
						) : (
							<Message className='bg-red-300 text-black' msg='Not Paid' />
						)}
					</div>
					<div className='p-5'>
						<h2 className='text-2xl my-5 font-light uppercase'>order items</h2>
						<OrderProductList orderItems={orderItems} />
					</div>
				</div>

				<div className='p-5 border w-full max-w-sm'>
					<OrderSummary order={order} />
					{loadingPay && (
						<div className='mx-auto'>
							<Spinner />
						</div>
					)}

					{!isDelivered && currentUser.isAdmin && (
						<Button
							onClick={() => {
								handleOrderUpdate({ isDelivered: true });
							}}
							className='bg-yellow-500 w-full my-5 text-white'
						>
							Mark as delivered
						</Button>
					)}

					{!isPaid && (
						<PayPalButton
							amount={totalPrice}
							onSuccess={onSuccessHandler}
							catchError={error => {
								console.log("Error:" + error.message);
							}}
							onError={error => {
								console.log(error);
							}}
						/>
					)}
				</div>
			</div>
		</Container>
	);
};

export default OrderScreen;
