import AboutImg from "../about-banner/about-banner.jsx";
import Collapsible from "../collapsible/collapsible";
import "./about.css";

export default function About() {
	return (
		<div className="about-container">
			<div className="about-img">
				<AboutImg />
			</div>

			<div className="dropdowns">
				<Collapsible label="Fiabilité">
					<div className="btn-txt">
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les
						photos sont conformes aux logements, et toutes les informations sont
						régulièrement vérifiées par nos équipes.
					</div>
				</Collapsible>
				<Collapsible label="Respect">
					<div className="btn-txt">
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
						comportement discriminatoire ou de perturbation du voisinage
						entraînera une exclusion de notre plateforme.
					</div>
				</Collapsible>
				<Collapsible label="Service">
					<div className="btn-txt">
						Nos équipes se tiennent à votre disposition pour vous fournir une
						expérience parfaite. N'hésitez pas à nous contacter si vous avez la
						moindre question.
					</div>
				</Collapsible>
				<Collapsible label="Sécurité">
					<div className="btn-txt">
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
						pour les voyageurs, chaque logement correspond aux critères de
						sécurité établis par nos services. En laissant une note aussi bien à
						l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
						les standards sont bien respectés. Nous organisons également des
						ateliers sur la sécurité domestique pour nos hôtes.
					</div>
				</Collapsible>
			</div>
		</div>
	);
}
