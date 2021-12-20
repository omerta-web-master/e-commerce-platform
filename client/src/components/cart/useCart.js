import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import setAlert from "../../actions/alertActions";

const useProducts = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { cartProducts } = useSelector(state => state.cart);

	const handleOnClick = () => {
		if (cartProducts.length !== 0) {
			navigate("/shipping");
		} else {
			dispatch(setAlert("Add some products first...", "info"));
		}
	};

	return { handleOnClick, cartProducts };
};

export default useProducts;
