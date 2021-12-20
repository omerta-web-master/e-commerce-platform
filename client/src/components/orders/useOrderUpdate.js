import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrder } from "../../actions/orderAction";
import { UPDATE_ORDER_RESET } from "../../reducers/orders/types";
import { getOrderDetails } from "../../actions/orderAction";

const useOrderUpdate = () => {
	const dispatch = useDispatch();

	const { success, error } = useSelector(state => state.orderUpdate);
	const { order } = useSelector(state => state.orderDetails);

	useEffect(() => {
		if (success) {
			dispatch({ type: UPDATE_ORDER_RESET });
			dispatch(getOrderDetails(order._id));
		}
	}, [success, dispatch, order]);

	const handleOrderUpdate = data => {
		dispatch(updateOrder(order._id, data));
	};

	return { handleOrderUpdate, error };
};

export default useOrderUpdate;
