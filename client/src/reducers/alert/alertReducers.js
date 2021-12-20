import { SET_ALERT, CLEAR_ALERT } from "./types";

export const alertReducer = (
	state = {
		alert: null,
	},
	action
) => {
	switch (action.type) {
		case SET_ALERT:
			return {
				alert: action.payload,
			};
		case CLEAR_ALERT:
			return {
				alert: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
