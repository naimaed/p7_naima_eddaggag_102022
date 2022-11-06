import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link className="accueil" style={{ textDecoration: "none" }} to="/">
				<div className="navbar-txt">Accueil</div>
			</Link>
			<Link className="propos" style={{ textDecoration: "none" }} to="/about">
				<div className="navbar-txt">A Propos</div>
			</Link>
		</nav>
	);
}
