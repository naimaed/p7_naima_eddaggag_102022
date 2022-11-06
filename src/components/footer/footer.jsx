import LOGO from "../../assets/images/logo.svg";
import "./footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div className="logo-footer">
				<img src={LOGO} alt="logo kasa" />
			</div>
			<div className="footer-txt">© 2020 Kasa. All rights reserved</div>
		</div>
	);
}
