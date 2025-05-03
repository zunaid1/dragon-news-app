import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter(

	[
		{
			path: "/",
			Component: HomeLayout,
			children: [
				{
					path: "",
					Component: Home,
				},
				{
					path: "/category/:id",
					Component: CategoryNews, 
					loader: () => fetch("/news.json"),
					hydrateFallbackElement: <Loading></Loading>
				}
			]
		},
		{
			path: '/auth',
			element: <AuthLayout></AuthLayout>,
			children: [
				{
					path: "/auth/login",
					Component: Login,
				},
				{
					path: "/auth/register",
					Component: Register,
				},
			]
		},
		{
			path: '/news-details/:id',
			element:
				<PrivateRoute>
					<NewsDetails></NewsDetails>
				</PrivateRoute>,
			loader: () => fetch("/news.json"),
			hydrateFallbackElement: <Loading></Loading>
		},
		{
			path: '/*',
			element: <h1>Error 404</h1>
		}
		


	]);

	export default router;