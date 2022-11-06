import "./gallery.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LogementsContext from "../../logements-context";

export default function Gallery() {
	const logements = useContext(LogementsContext);

	return (
		<div className="card-container">
			{logements &&
				logements.map((logement) => {
					return (
						<Link className="card" key={logement.id} to={logement.id}>
							<img
								className="gallery-img"
								src={logement.cover}
								alt="logement"
							/>

							<div className="card-title">{logement.title}</div>
						</Link>
					);
				})}
		</div>
	);
}
