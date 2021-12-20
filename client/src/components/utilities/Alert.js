import React from "react";
import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
	const { alert } = useSelector(state => state.alert);

	if (!alert) {
		return null;
	}

	return (
		<div className={`alert alert-${alert.type}`}>
			<p>{alert.message}</p>
		</div>
	);
};

export default Alert;
