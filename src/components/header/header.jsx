import "./header.css";
import logorouge from "../../assets/images/logorouge.png";
import Navbar from "../navbar/navbar";

export default function Header() {
	return (
		<div className="header-container">
			<div>
				<img className="logorouge" src={logorouge} alt="logo" />
			</div>
			<div>
				<Navbar />
			</div>
		</div>
	);
}
