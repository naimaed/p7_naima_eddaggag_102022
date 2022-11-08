import { useState } from "react";
import "./carousel.css";

export default function Carousel(props) {
	const pictures = props.pictures;
	const [current, setCurrent] = useState(0);

	return (
		<div className="carousel-container">
			{pictures.length > 1 && (
				<button
					className="btn-carousel btn-carousel-left"
					onClick={() => {
						if (current - 1 >= 0) setCurrent(current - 1);
						else setCurrent(pictures.length - 1);
					}}
				>
					{!current ? (
						<span>
							<i className="fa-solid fa-chevron-left"> </i>
						</span>
					) : (
						<span></span>
					)}
				</button>
			)}

			<img className="carousel-img" src={pictures[current]} alt="" />
			<div className="img-counter">
				{current + 1}/{pictures.length}
			</div>

			{pictures.length > 1 && (
				<button
					className="btn-carousel btn-carousel-right"
					onClick={() => {
						if (current + 1 < pictures.length) setCurrent(current + 1);
						else setCurrent(0);
					}}
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			)}
		</div>
	);
}
