import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import useAdminMenu from "../../admin/AdminMenu/useAdminMenu";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Container from "../../utilities/Container";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import MainNav from "./MainNav";
import CartNavLink from "../../cart/CartNavLink";
import MobileNav from "./MobileNav";
import AuthLinks from "./AuthLinks";
import AdminMenu from "../../admin/AdminMenu/AdminMenu";

const Header = () => {
	const userMenuElement = useRef();
	const adminMenuElement = useRef();

	const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
	const [isMobileTogglerVisible, setIsMobileTogglerVisible] = useState(false);
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const { isAuthenticated, currentUser } = useSelector(state => state.auth);

	const { isAdminMenuVisible, setIsAdminMenuVisible } =
		useAdminMenu(adminMenuElement);

	const { pathname } = useLocation();

	useEffect(() => {
		setIsUserMenuVisible(false);
		setIsMobileMenuVisible(false);
	}, [pathname]);

	useEffect(() => {
		if (windowWidth < 768) {
			setIsMobileTogglerVisible(true);
		} else {
			setIsMobileTogglerVisible(false);
		}
	}, [windowWidth]);

	useEffect(() => {
		const checkIfClickOutside = e => {
			if (isUserMenuVisible && !userMenuElement.current?.contains(e.target)) {
				setIsUserMenuVisible(false);
			}
		};
		document.addEventListener("click", checkIfClickOutside);

		return () => {
			document.removeEventListener("click", checkIfClickOutside);
		};
	}, [isUserMenuVisible]);

	const resizeWindow = () => {
		setWindowWidth(window.innerWidth);
	};

	window.addEventListener("resize", resizeWindow);

	const handleClick = () => {
		setIsUserMenuVisible(!isUserMenuVisible);
	};

	return (
		<div className='header shadow-lg py-5 bg-white text-black'>
			<Container>
				<div className='flex justify-between items-center'>
					<Link to='/'>
						<div>
							<div className='flex items-center gap-2'>
								<GiConverseShoe className='text-5xl text-red-800' />
								<h2 className='text-xl inline text-gray-700 py-2 font-bold uppercase'>
									shoes-
									<span className='text-red-700 text font-bold'>genius</span>
								</h2>
							</div>
						</div>
					</Link>
					{!isMobileTogglerVisible && (
						<>
							<MainNav />
							<div>
								<nav>
									<ul className='flex gap-3'>
										<li>
											<CartNavLink />
										</li>
										{!isAuthenticated && <AuthLinks />}
										{isAuthenticated && (
											<>
												<li className='relative'>
													<button onClick={handleClick}>
														<FaUserAlt />
													</button>
													{isUserMenuVisible && (
														<UserMenu ref={userMenuElement} />
													)}
												</li>
												<li className='relative'>
													{currentUser.isAdmin && (
														<button
															onClick={() => {
																setIsAdminMenuVisible(!isAdminMenuVisible);
															}}
														>
															<MdAdminPanelSettings className='text-xl' />
														</button>
													)}
													{isAdminMenuVisible && (
														<AdminMenu ref={adminMenuElement} />
													)}
												</li>
											</>
										)}
									</ul>
								</nav>
							</div>
						</>
					)}

					{isMobileTogglerVisible && (
						<div className='flex items-center gap-2'>
							{!isAuthenticated && (
								<ul className='flex items-center gap-3'>
									<AuthLinks />
								</ul>
							)}
							<CartNavLink />
							<button
								className='z-50'
								onClick={() => {
									setIsMobileMenuVisible(!isMobileMenuVisible);
								}}
							>
								<FaBars className='text-3xl' />
							</button>
						</div>
					)}

					{isMobileMenuVisible && <MobileNav />}
				</div>
			</Container>
		</div>
	);
};

export default Header;
