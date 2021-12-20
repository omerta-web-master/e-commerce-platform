import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import setAlert from "../../../actions/alertActions";

const useCreateProduct = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		if (success) {
			setSuccess(false);
			dispatch(setAlert("Product created!", "success"));
		}

		if (error) {
			setError(null);
			dispatch(setAlert(`Product create fail: ${error}`, "danger"));
		}
		return () => {
			setError(null);
			setSuccess(null);
		};
	}, [success, error]);

	const createProduct = async (product, file) => {
		const data = new FormData();
		if (file) {
			data.append("image", file);
		}
		data.append("content", JSON.stringify(product));

		const config = {
			headers: {
				"Content-type": "multipart/form-data",
			},
		};

		try {
			const res = await axios.post(`/api/products`, data, config);
			setSuccess(true);
		} catch (error) {
			setError(
				error.response?.data?.message
					? error.response.data.message
					: error.message
			);
		}
	};

	return { createProduct, success, error };
};

export default useCreateProduct;
