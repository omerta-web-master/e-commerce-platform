import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
	return (
		<nav>
			<ul className='flex gap-4'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
