import React from "react";
import "./AdminMenu.css";
import { Link } from "react-router-dom";

const AdminMenu = React.forwardRef((props, ref) => {
	return (
		<div className='admin_menu' ref={ref}>
			<nav className='shadow-lg'>
				<h3 className='text-center py-2 px-10 font-semibold whitespace-nowrap'>
					Admin panel
				</h3>
				<ul className='divide-y divide-gray-300 w-full'>
					<li>
						<Link className='block py-2 text-center' to='/admin/users'>
							Users
						</Link>
					</li>
					<li>
						<Link className='block py-2 text-center' to='/admin/orders'>
							All orders
						</Link>
					</li>
					<li>
						<Link className='block py-2 text-center' to='/admin/manageproducts'>
							Manage products
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
});

export default AdminMenu;
