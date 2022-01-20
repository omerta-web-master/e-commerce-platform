import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { BASE_URL } from "../services/api/base";
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERROR,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOAD_USER_REQUEST,
	LOGOUT,
} from "../reducers/auth/type";

const loadUser = () => async dispatch => {
	const token = JSON.parse(localStorage.getItem("token"));
	console.log("Load user");
	if (!token) {
		dispatch({ type: LOAD_USER_FAIL, payload: "" });
		return;
	}
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	// Set the token in global headers
	setAuthToken(token);
	dispatch({ type: LOAD_USER_REQUEST });
	try {
		const res = await axios.post(BASE_URL + "/api/auth/me", { token }, config);
		dispatch({ type: LOAD_USER_SUCCESS, payload: res.data.data });
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const login = inputValues => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	try {
		const res = await axios.post(
			BASE_URL + "/api/auth/login",
			inputValues,
			config
		);
		// Set the token in global headers
		setAuthToken(res.data.token);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const register = inputValues => async dispatch => {
	console.log("Register");
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	try {
		const res = await axios.post(
			BASE_URL + "/api/auth/register",
			inputValues,
			config
		);
		// Set the token in global headers
		setAuthToken(res.data.token);
		dispatch({ type: REGISTER_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};

export const logout = () => dispatch => {
	localStorage.removeItem("token");
	dispatch({ type: LOGOUT });
};

export const clearError = () => dispatch => {
	dispatch({ type: CLEAR_ERROR });
};

export { loadUser };
