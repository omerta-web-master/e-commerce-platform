import {
	GET_ORDERS_FAIL,
	GET_ORDERS_REQUEST,
	GET_ORDERS_RESET,
	GET_ORDERS_SUCCESS,
	GET_ORDER_DETAILS_FAIL,
	GET_ORDER_DETAILS_REQUEST,
	GET_ORDER_DETAILS_RESET,
	GET_ORDER_DETAILS_SUCCESS,
	PAY_ORDER_FAIL,
	PAY_ORDER_REQUEST,
	PAY_ORDER_RESET,
	PAY_ORDER_SUCCESS,
	PLACE_ORDER_FAIL,
	PLACE_ORDER_REQUEST,
	PLACE_ORDER_RESET,
	PLACE_ORDER_SUCCESS,
	UPDATE_ORDER_FAIL,
	UPDATE_ORDER_RESET,
	UPDATE_ORDER_SUCCESS,
} from "./types";

export const orderCreateReducer = (
	state = {
		loading: false,
		success: null,
		order: {},
		error: null,
	},
	action
) => {
	switch (action.type) {
		case PLACE_ORDER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PLACE_ORDER_SUCCESS:
			return {
				...state,
				success: true,
				loading: false,
				order: action.payload,
			};
		case PLACE_ORDER_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case PLACE_ORDER_RESET:
			return {
				...state,
				loading: false,
				error: null,
				success: false,
				order: null,
			};
		default:
			return {
				...state,
			};
	}
};

export const orderDetailsReducer = (
	state = { loading: true, success: null, error: null, order: {} },
	action
) => {
	switch (action.type) {
		case GET_ORDER_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};

		case GET_ORDER_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				order: action.payload,
			};
		case GET_ORDER_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case GET_ORDER_DETAILS_RESET:
			return {
				loading: true,
			};
		default:
			return {
				...state,
			};
	}
};

export const orderGetAllReducer = (
	state = { loading: false, orders: [], error: null },
	action
) => {
	switch (action.type) {
		case GET_ORDERS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case GET_ORDERS_SUCCESS:
			return {
				...state,
				loading: false,
				orders: action.payload,
			};
		case GET_ORDERS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case GET_ORDERS_RESET:
			return {
				loading: false,
				error: null,
				orders: [],
			};

		default:
			return {
				...state,
			};
	}
};

export const payOrderReducer = (state, action) => {
	switch (action.type) {
		case PAY_ORDER_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PAY_ORDER_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
			};
		case PAY_ORDER_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case PAY_ORDER_RESET:
			return {};

		default:
			return {
				...state,
			};
	}
};

export const orderUpdateReducer = (
	state = { success: false, error: null },
	action
) => {
	switch (action.type) {
		case UPDATE_ORDER_SUCCESS:
			return {
				...state,
				success: true,
			};

		case UPDATE_ORDER_FAIL:
			return {
				...state,
				error: action.payload,
			};

		case UPDATE_ORDER_RESET:
			return {
				success: false,
				error: null,
			};

		default:
			return {
				...state,
			};
	}
};
