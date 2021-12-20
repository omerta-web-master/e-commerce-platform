import axios from "axios";
import {
	GET_USERS_FAIL,
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	SET_CURRENT_USER,
	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
} from "../reducers/users/types";

export const getUsers =
	(keyword = "") =>
	async dispatch => {
		dispatch({ type: GET_USERS_REQUEST });
		try {
			const res = await axios.get(`/api/users?keyword=${keyword}`);
			dispatch({ type: GET_USERS_SUCCESS, payload: res.data.data });
		} catch (error) {
			dispatch({
				type: GET_USERS_FAIL,
				payload: error.response?.data?.message
					? error.response.data.message
					: error.message,
			});
		}
	};

export const setCurrentUser = user => dispatch => {
	dispatch({ type: SET_CURRENT_USER, payload: user });
};

export const updateUser = (id, data) => async dispatch => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	dispatch({ type: UPDATE_USER_REQUEST });
	try {
		const res = await axios.put(`/api/users/${id}`, data, config);
		dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data.data });
	} catch (error) {
		dispatch({
			type: UPDATE_USER_FAIL,
			payload: error.response?.data?.message
				? error.response.data.message
				: error.message,
		});
	}
};
