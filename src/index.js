import "normalize.css";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import logements from "./logements.json";
import LogementsContext from "./logements-context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<LogementsContext.Provider value={logements}>
		<RouterProvider router={router} />
	</LogementsContext.Provider>
);
