import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";

const useProducts = () => {
	const productList = useSelector(state => state.productList);
	const { products, loading, error } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return { products, loading, error };
};

export default useProducts;
