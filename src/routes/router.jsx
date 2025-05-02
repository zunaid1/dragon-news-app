import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

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
			path: '/news',
			element: <h1>News Page</h1>
		},
		{
			path: '/*',
			element: <h1>Error 404</h1>
		}
		


	]);

	export default router;