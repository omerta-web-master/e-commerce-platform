import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import setAlert from "../../../actions/alertActions";
import { getProducts } from "../../../actions/productActions";

const useDeleteProject = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (success) {
			setSuccess(false);
			dispatch(setAlert("Product deleted", "success"));
			dispatch(getProducts());
		}

		if (error) {
			setError(null);
			dispatch(setAlert(`Product delete fail: ${error}`, "danger"));
		}
		return () => {
			setError(null);
			setSuccess(null);
		};
	}, [success, error]);

	const deleteProject = async id => {
		try {
			await axios.delete(`/api/products/${id}`);
			setSuccess(true);
		} catch (error) {
			setError(
				error.response?.data?.message
					? error.response.data.message
					: error.message
			);
		}
	};

	return { deleteProject, success, error };
};

export default useDeleteProject;
