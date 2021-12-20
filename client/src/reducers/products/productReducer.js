import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESSS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_RESET,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_RESET,
} from "./types";

export const productListReducer = (
	state = {
		products: [],
		loading: false,
		error: null,
	},
	action
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PRODUCT_LIST_SUCCESSS:
			return {
				products: action.payload,
				loading: false,
				error: null,
			};
		case PRODUCT_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};

export const productDetailsReducer = (
	state = {
		product: { reviews: [] },
		loading: false,
		error: null,
	},
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PRODUCT_DETAILS_SUCCESS:
			return {
				product: action.payload,
				loading: false,
				error: null,
			};
		case PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case PRODUCT_DETAILS_RESET:
			return {
				product: { reviews: [] },
				loading: false,
				error: null,
			};

		default:
			return {
				...state,
			};
	}
};

export const productUpdateReducer = (
	state = {
		loading: false,
		error: null,
		success: false,
	},
	action
) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PRODUCT_UPDATE_SUCCESS:
			return {
				success: action.true,
				loading: false,
				error: null,
			};
		case PRODUCT_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
				success: false,
			};

		case PRODUCT_UPDATE_RESET:
			return {
				success: false,
				loading: false,
				error: null,
			};

		default:
			return {
				...state,
			};
	}
};
