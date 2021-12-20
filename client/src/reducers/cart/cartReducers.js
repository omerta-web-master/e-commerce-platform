import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	SAVE_SHIPPING_ADDRESS,
	SAVE_PAYMENT_METHOD,
	RESET_STATE,
} from "./types";

let productsFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
if (!productsFromLocalStorage) {
	productsFromLocalStorage = [];
}

const initialState = {
	cartProducts: [...productsFromLocalStorage],
	totalPrice: 0,
	shippingAddress: null,
	paymentMethod: null,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			const newProduct = action.payload;
			const existentProduct = state.cartProducts.find(
				product => product._id === newProduct._id
			);
			if (existentProduct) {
				return {
					...state,
					cartProducts: state.cartProducts.map(product => {
						if (product._id === newProduct._id) {
							return newProduct;
						}
						return product;
					}),
				};
			}
			return {
				...state,
				cartProducts: [...state.cartProducts, newProduct],
			};

		case REMOVE_PRODUCT_FROM_CART:
			return {
				...state,
				cartProducts: state.cartProducts.filter(
					item => item._id !== action.payload
				),
			};

		case INCREMENT_QUANTITY: {
			return {
				...state,
				cartProducts: state.cartProducts.map(product => {
					if (product._id === action.payload) {
						return {
							...product,
							quantity:
								product.quantity >= product.countInStock
									? product.quantity
									: product.quantity + 1,
						};
					}
					return product;
				}),
			};
		}

		case DECREMENT_QUANTITY: {
			return {
				...state,
				cartProducts: state.cartProducts.map(product => {
					if (product._id === action.payload) {
						return {
							...product,
							quantity:
								product.quantity <= 1 ? product.quantity : product.quantity - 1,
						};
					}
					return product;
				}),
			};
		}

		case SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};

		case RESET_STATE:
			return {
				...initialState,
				cartProducts: [],
			};

		default:
			return {
				...state,
			};
	}
};
