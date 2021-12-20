import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERROR,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT,
} from "./type";
export const authReducer = (
	state = {
		isAuthenticated: false,
		currentUser: null,
		loading: true,
		error: null,
		token: null,
	},
	action
) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				token: action.payload.token,
				currentUser: action.payload.user,
			};
		case LOGIN_FAIL:
			return {
				...state,

				loading: false,
				isAuthenticated: false,
				error: action.payload,
			};
		case REGISTER_SUCCESS:
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				token: action.payload.token,
				currentUser: action.payload.user,
			};
		case REGISTER_FAIL:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				error: action.payload,
			};
		case LOAD_USER_REQUEST:
			return {
				...state,
				loading: true,
			};

		case LOAD_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				currentUser: action.payload,
			};

		case LOAD_USER_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				currentUser: null,
			};
		case LOGOUT: {
			return {
				loading: false,
				isAuthenticated: false,
				error: null,
				currentUser: null,
				token: null,
			};
		}

		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		default:
			return {
				...state,
			};
	}
};
