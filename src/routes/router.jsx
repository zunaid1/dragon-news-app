import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(

	[
		{
			path: "/",
			Component: HomeLayout
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