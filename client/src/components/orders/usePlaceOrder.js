import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import setAlert from "../../actions/alertActions";
import { placeOrder } from "../../actions/orderAction";
import { resetCartState } from "../../actions/cartActions";

const usePlaceOrder = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const { cartProducts, shippingAddress, paymentMethod } = cart;
	const orderCreate = useSelector(state => state.orderCreate);
	const { success, error, order, loading } = orderCreate;

	const navigate = useNavigate();

	const [itemsPrice, setItemsPrice] = useState(0);
	const [shippingPrice, setShippingPrice] = useState(0);
	const [taxPrice, setTaxPrice] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (!paymentMethod) {
			navigate("/paymentmethod");
		}
	}, [shippingAddress, paymentMethod, navigate]);

	useEffect(() => {
		setItemsPrice(
			cartProducts.reduce((acc, item) => (acc += item.price * item.quantity), 0)
		);

		setShippingPrice(itemsPrice > 100 ? 0 : 15);
		setTaxPrice((itemsPrice / 100) * 15);
		setTotalPrice(itemsPrice + taxPrice + shippingPrice);
	}, [cartProducts, itemsPrice, taxPrice, shippingPrice]);

	useEffect(() => {
		if (success && order) {
			dispatch(setAlert("Order placed!", "success"));
			setTimeout(() => {
				navigate(`/order/${order._id}`);
				dispatch(resetCartState());
			}, 2000);
		}
	}, [order, navigate, dispatch, success]);

	useEffect(() => {
		if (error) {
			dispatch(setAlert(error, "danger"));
		}
	}, [error, dispatch]);

	const handlePlaceOrder = () => {
		const order = {
			orderItems: cartProducts,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		};
		dispatch(placeOrder(order));
	};

	return {
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
	};
};

export default usePlaceOrder;
