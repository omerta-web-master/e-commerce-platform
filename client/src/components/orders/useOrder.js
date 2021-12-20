import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../../actions/orderAction";
import {
	GET_ORDER_DETAILS_RESET,
	PAY_ORDER_RESET,
} from "../../reducers/orders/types";

const useOrder = () => {
	const dispatch = useDispatch();
	const { id: orderId } = useParams();

	const orderDetails = useSelector(state => state.orderDetails);
	const { loading: loadingOrderDetails, error, order } = orderDetails;

	const { success, loading: loadingPay } = useSelector(state => state.payOrder);

	useEffect(() => {
		dispatch(getOrderDetails(orderId));
	}, [orderId, dispatch]);

	useEffect(() => {
		if (success) {
			dispatch({ type: PAY_ORDER_RESET });
			dispatch(getOrderDetails(orderId));
		}
	}, [success, orderId, dispatch]);

	// Cleanup
	useEffect(() => {
		return () => {
			dispatch({ type: GET_ORDER_DETAILS_RESET });
		};
	}, [dispatch]);

	const onSuccessHandler = details => {
		dispatch(payOrder(orderId, details));
	};

	const handleMarkAsDelivered = () => {
		console.log("Click");
	};

	return {
		onSuccessHandler,
		loadingOrderDetails,
		error,
		loadingPay,
		order,
	};
};

export default useOrder;
