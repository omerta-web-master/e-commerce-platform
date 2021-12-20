import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	SAVE_SHIPPING_ADDRESS,
	SAVE_PAYMENT_METHOD,
	RESET_STATE,
} from "../reducers/cart/types";

export const addProductToCart = product => dispatch => {
	dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
};

export const removeProductFromCart = id => dispatch => {
	dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: id });
};

export const incrementQuantity = id => dispatch => {
	dispatch({ type: INCREMENT_QUANTITY, payload: id });
};

export const decrementQuantity = id => dispatch => {
	dispatch({ type: DECREMENT_QUANTITY, payload: id });
};

export const saveShippingAddress = address => dispatch => {
	dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: address });
};

export const savePaymentMethod = paymentMethod => dispatch => {
	dispatch({ type: SAVE_PAYMENT_METHOD, payload: paymentMethod });
};

export const resetCartState = () => dispatch => {
	localStorage.removeItem("cartProducts");
	dispatch({ type: RESET_STATE });
};
