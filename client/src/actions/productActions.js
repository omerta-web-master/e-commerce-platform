import axios from "axios";
import { BASE_URL } from "../services/api/base";
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESSS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_FAIL,
} from "../reducers/products/types";

export const getProducts =
	(keyword = "") =>
	async dispatch => {
		try {
			dispatch({ type: PRODUCT_LIST_REQUEST });
			const res = await axios.get(
				BASE_URL + `/api/products?keyword=${keyword}`
			);
			dispatch({ type: PRODUCT_LIST_SUCCESSS, payload: res.data.data });
		} catch (error) {
			dispatch({
				type: PRODUCT_LIST_FAIL,
				payload: error.response?.data?.message
					? error.response.data.message
					: error.message,
			});
		}
	};

export const getProduct = id => async dispatch => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });
		const res = await axios.get(BASE_URL + `/api/products/${id}`);
		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data.data });
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const updateProduct = (id, data) => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	dispatch({ type: PRODUCT_UPDATE_REQUEST });
	try {
		await axios.put(BASE_URL + `/products/${id}`, data, config);
		dispatch({ type: PRODUCT_UPDATE_SUCCESS });
	} catch (error) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};
