import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useAdminMenu = adminMenuElement => {
	const [isAdminMenuVisible, setIsAdminMenuVisible] = useState(false);
	const pathname = useLocation();

	useEffect(() => {
		setIsAdminMenuVisible(false);
	}, [pathname]);

	useEffect(() => {
		const checkIfClickOutside = e => {
			if (isAdminMenuVisible && !adminMenuElement.current?.contains(e.target)) {
				setIsAdminMenuVisible(false);
			}
		};
		document.addEventListener("click", checkIfClickOutside);

		return () => {
			document.removeEventListener("click", checkIfClickOutside);
		};
	}, [isAdminMenuVisible, adminMenuElement]);

	return { isAdminMenuVisible, setIsAdminMenuVisible };
};

export default useAdminMenu;
