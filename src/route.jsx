import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Logement from "./components/logement/logement";
import About from "./components/about/about";
import Error from "./components/error/error";
import App from "./App";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Home />,
			},

			{
				path: "/:id",
				element: <Logement />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);
