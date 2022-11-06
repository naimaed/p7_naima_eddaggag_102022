import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
	return (
		<div className="page">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
