import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
	return (
		<div className='py-10 mt-5 bg-gray-900 text-white flex items-center justify-center gap-2'>
			<FaCopyright />
			<h2>Copyright 2021</h2>
		</div>
	);
};

export default Footer;
