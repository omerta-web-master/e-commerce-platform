import React, { useEffect } from "react";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/layout/Footer";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import AboutScreen from "./screens/AboutScreen";
import SearchProductScreen from "./screens/SearchProductScreen";
import Spinner from "./components/utilities/Spinner";
import { loadUser } from "./actions/authActions";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrdersScreen from "./screens/OrdersScreen";
import PrivateRoute from "./components/routing/PrivateRoute";
import UsersScreen from "./screens/admin/UsersScreen";
import AllOrdersScreen from "./screens/admin/AllOrdersScreen";
import ManageProductsScreen from "./screens/admin/ManageProductsScreen";
import EditProductScreen from "./screens/admin/EditProductScreen";
import CreateProductScreen from "./screens/admin/CreateProductScreen";
import AdminOnly from "./components/routing/AdminOnly";
import UserProfile from "./screens/UserProfile";

function App() {
	const { loading } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	if (loading) {
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Spinner />
			</div>
		);
	}

	return (
		<>
			<Router>
				<Header />
				<main className='' style={{ minHeight: "700px" }}>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/register' element={<RegisterScreen />} />
						<Route path='/about' element={<AboutScreen />} />
						<Route path='/products' element={<ProductsScreen />} />
						<Route path='/products/:id' element={<ProductScreen />} />
						<Route
							path='/products/search/:keyword'
							element={<SearchProductScreen />}
						/>
						<Route path='/cart' element={<CartScreen />} />

						<Route
							path='/shipping'
							element={
								<PrivateRoute>
									<ShippingScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path='/paymentmethod'
							element={
								<PrivateRoute>
									<PaymentMethodScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path='/placeorder'
							element={
								<PrivateRoute>
									<PlaceOrderScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path='/order/:id'
							element={
								<PrivateRoute>
									<OrderScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path='/user/orders'
							element={
								<PrivateRoute>
									<OrdersScreen />
								</PrivateRoute>
							}
						/>
						<Route
							path='/user/profile'
							element={
								<PrivateRoute>
									<UserProfile />
								</PrivateRoute>
							}
						/>

						{/* ADMIN ROUTES */}

						<Route
							path='/admin/users'
							element={
								<AdminOnly>
									<UsersScreen />
								</AdminOnly>
							}
						/>
						<Route
							path='/admin/orders'
							element={
								<AdminOnly>
									<AllOrdersScreen />
								</AdminOnly>
							}
						/>
						<Route
							path='/admin/manageproducts'
							element={
								<AdminOnly>
									<ManageProductsScreen />
								</AdminOnly>
							}
						/>
						<Route
							path='/admin/manageproducts/:id'
							element={
								<AdminOnly>
									<EditProductScreen />
								</AdminOnly>
							}
						/>
						<Route
							path='/admin/manageproducts/createproduct'
							element={
								<AdminOnly>
									<CreateProductScreen />
								</AdminOnly>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
