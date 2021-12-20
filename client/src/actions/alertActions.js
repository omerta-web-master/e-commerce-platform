import { SET_ALERT, CLEAR_ALERT } from "../reducers/alert/types";

const setAlert = (message, type) => dispatch => {
	dispatch({ type: SET_ALERT, payload: { message, type } });
	setTimeout(() => {
		dispatch({ type: CLEAR_ALERT });
	}, 3000);
};

export default setAlert;
