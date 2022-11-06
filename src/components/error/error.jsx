import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./error.css";

export default function Error() {
	return (
		<div>
			<Header />
			<div className="error-page">
				<h1 className="title-error">404</h1>
				<div className="oups">
					Oups! La page que vous demandez n'existe pas.
				</div>
				<Link className="link-home" to="/">
					<div>retourner sur la page d'accueil</div>
				</Link>
			</div>
			<Footer />
		</div>
	);
}
