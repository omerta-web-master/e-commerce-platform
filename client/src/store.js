import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/products/productReducer";
import { cartReducer } from "./reducers/cart/cartReducers";
import { authReducer } from "./reducers/auth/authReducers";
import { alertReducer } from "./reducers/alert/alertReducers";
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderGetAllReducer,
	payOrderReducer,
	orderUpdateReducer,
} from "./reducers/orders/orderReducers";
import {
	usersGetAllReducer,
	userDetailsReducer,
	userUpdateReducer,
} from "./reducers/users/usersReducers";

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	auth: authReducer,
	alert: alertReducer,

	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderGetAll: orderGetAllReducer,
	payOrder: payOrderReducer,
	orderUpdate: orderUpdateReducer,

	usersGetAll: usersGetAllReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
});

const initialState = {};

const midleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
