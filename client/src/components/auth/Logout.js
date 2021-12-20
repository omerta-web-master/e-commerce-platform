import React from "react";
import { logout } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GrLogout } from "react-icons/gr";

const Logout = ({ className }) => {
	const dispatch = useDispatch();

	const { isAuthenticated } = useSelector(state => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		window.location.reload();
	};

	return isAuthenticated ? (
		<button
			className={`${className} inline-flex items-center gap-2`}
			onClick={handleLogout}
		>
			<GrLogout />
			Logout
		</button>
	) : null;
};

export default Logout;
