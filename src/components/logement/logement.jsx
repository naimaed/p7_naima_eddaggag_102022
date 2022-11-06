import "./logement.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LogementsContext from "../../logements-context";
import Collapsible from "../collapsible/collapsible";
import Carousel from "../carousel/carousel";

export default function Logement() {
	const { id } = useParams();

	const logements = useContext(LogementsContext);

	const logement = logements.find((logement) => logement.id === id);
	console.log(logement.rating);
	if (logement === undefined) throw new Error("logement non trouver");

	return (
		<div className="apt-container">
			<div className="apt-layout">
				<div>
					<Carousel pictures={logement.pictures} />
				</div>

				<div className="apt-part-1">
					<div className="title-location-filters">
						<div className="title-location">
							<div className="apt-title">{logement.title}</div>
							<div className="apt-location">{logement.location}</div>

							<div className="filters-layout">
								<ul className="filters-ul">
									{logement.tags.map((tag, index) => (
										<li className="filters-li" key={index}>
											{tag}
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="host-stars-container">
							<div className="host-container">
								<div className="host-name">{logement.host.name}</div>
								<img
									className="host-img"
									src={logement.host.picture}
									alt=""
								></img>
							</div>
							<div className="stars-rating">
								{[...Array(5)].map((e, i) =>
									i < logement.rating ? (
										<FaStar className="red-stars" fill="#ff6060" key={i} />
									) : (
										<FaStar className="grey-stars" fill="#E3E3E3" key={i} />
									)
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="apt-collapsible-container">
					<div className="apt-collapsible">
						<Collapsible label="Description">
							<div className="collapsible-apt">
								<div>{logement.description}</div>
							</div>
						</Collapsible>
					</div>
					<div className="apt-collapsible">
						<Collapsible label="Équipements">
							<div className="collapsible-apt">
								<ul>
									{logement.equipments.map((equipment, index) => (
										<li classNAme="collapsible-list" key={index}>
											{equipment}
										</li>
									))}
								</ul>
							</div>
						</Collapsible>
					</div>
				</div>
			</div>
		</div>
	);
}
