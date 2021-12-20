import React from "react";
import { Link } from "react-router-dom";
import "./UserMenu.css";
import Logout from "../../auth/Logout";

const UserMenu = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className='user_menu'>
			<nav className='shadow-lg'>
				<ul className='divide-y divide-gray-300'>
					<li className='px-10 py-2'>
						<Link to='/user/orders'>Orders</Link>
					</li>
					<li className='px-10 py-2'>
						<Link to='/user/profile'>Profile</Link>
					</li>
					<li className='px-10 py-2'>
						<Logout />
					</li>
				</ul>
			</nav>
		</div>
	);
});

export default UserMenu;
