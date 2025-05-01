import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

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
					Component: CategoryNews
				}
			]
		},
		{
			path: '/auth',
			element: <h1>Authetication Page</h1>
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