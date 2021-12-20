import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../auth/Logout";
import "./MobileNav.css";

const MobileNav = () => {
	return (
		<nav className='mobile_nav shadow-lg'>
			<ul className='flex flex-col gap-3 justify-center'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/user/orders'>Orders</Link>
				</li>
				<li>
					<Link to='/user/profile'>Profile</Link>
				</li>
				<li>
					<Logout />
				</li>
			</ul>
		</nav>
	);
};

export default MobileNav;
