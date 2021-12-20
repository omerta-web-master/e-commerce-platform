import axios from "axios";
import {
	PLACE_ORDER_REQUEST,
	PLACE_ORDER_FAIL,
	PLACE_ORDER_SUCCESS,
	GET_ORDER_DETAILS_SUCCESS,
	GET_ORDER_DETAILS_REQUEST,
	GET_ORDER_DETAILS_FAIL,
	GET_ORDERS_REQUEST,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_FAIL,
	PLACE_ORDER_RESET,
	PAY_ORDER_REQUEST,
	PAY_ORDER_SUCCESS,
	PAY_ORDER_FAIL,
	UPDATE_ORDER_FAIL,
	UPDATE_ORDER_SUCCESS,
} from "../reducers/orders/types";

export const placeOrder = order => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	try {
		dispatch({ type: PLACE_ORDER_REQUEST });
		const res = await axios.post("/api/orders", order, config);
		dispatch({ type: PLACE_ORDER_SUCCESS, payload: res.data.data });
		setTimeout(() => {
			dispatch({ type: PLACE_ORDER_RESET });
		}, 2000);
	} catch (error) {
		dispatch({
			type: PLACE_ORDER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const getOrderDetails = id => async dispatch => {
	dispatch({ type: GET_ORDER_DETAILS_REQUEST });
	try {
		const res = await axios.get(`/api/orders/${id}`);
		dispatch({ type: GET_ORDER_DETAILS_SUCCESS, payload: res.data.data });
	} catch (error) {
		dispatch({
			type: GET_ORDER_DETAILS_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const getOrders = id => async dispatch => {
	let res;
	try {
		dispatch({ type: GET_ORDERS_REQUEST });
		if (id) {
			res = await axios.get(`/api/users/${id}/orders`);
		} else {
			res = await axios.get(`/api/orders`);
		}

		dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data.data });
	} catch (error) {
		dispatch({
			type: GET_ORDERS_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const payOrder = (orderId, paymentResult) => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	dispatch({ type: PAY_ORDER_REQUEST });
	try {
		const res = await axios.post(
			`/api/orders/${orderId}/pay`,
			paymentResult,
			config
		);
		dispatch({ type: PAY_ORDER_SUCCESS });
	} catch (error) {
		dispatch({
			type: PAY_ORDER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const updateOrder = (id, data) => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	try {
		const res = await axios.put(`/api/orders/${id}`, data, config);
		dispatch({ type: UPDATE_ORDER_SUCCESS });
	} catch (error) {
		dispatch({
			type: UPDATE_ORDER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};
