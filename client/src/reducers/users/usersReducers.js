import {
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	GET_USERS_FAIL,
	SET_CURRENT_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
	UPDATE_USER_REQUEST,
	UPDATE_USER_RESET,
} from "./types";

export const usersGetAllReducer = (
	state = {
		loading: true,
		users: [],
		error: null,
	},
	action
) => {
	switch (action.type) {
		case GET_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
			};
		case GET_USERS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
				users: null,
			};
		default:
			return {
				...state,
			};
	}
};

export const userDetailsReducer = (state = { currentUser: null }, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};

export const userUpdateReducer = (
	state = { updatedUser: null, loading: false, error: null },
	action
) => {
	switch (action.type) {
		case UPDATE_USER_REQUEST:
			return {
				...state,
				loading: true,
			};

		case UPDATE_USER_SUCCESS:
			return {
				...state,
				loading: false,
				updatedUser: action.payload,
				error: null,
			};

		case UPDATE_USER_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_USER_RESET:
			return {
				updatedUser: null,
				loading: false,
				error: null,
			};

		default:
			return {
				...state,
			};
	}
};
