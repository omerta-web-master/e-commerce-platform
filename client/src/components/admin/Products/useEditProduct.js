import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import setAlert from "../../../actions/alertActions";

const useEditProduct = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		if (success) {
			setSuccess(false);
			dispatch(setAlert("Product updated", "success"));
		}

		if (error) {
			setError(null);
			dispatch(setAlert(`Product update fail: ${error}`, "danger"));
		}
		return () => {
			setError(null);
			setSuccess(null);
		};
	}, [success, error]);

	const updateProduct = async (updatedProduct, file) => {
		const data = new FormData();
		if (file) {
			data.append("image", file);
		}
		data.append("content", JSON.stringify(updatedProduct));

		const config = {
			headers: {
				"Content-type": "multipart/form-data",
			},
		};

		try {
			const res = await axios.put(`/api/products/${id}`, data, config);
			setSuccess(true);
		} catch (error) {
			setError(
				error.response?.data?.message
					? error.response.data.message
					: error.message
			);
		}
	};

	return { updateProduct, success, error };
};

export default useEditProduct;
