import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./collapsible.css";

export default function Collapsible(props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="menu">
			<button className="btn btn-apt" onClick={() => setIsOpen(!isOpen)}>
				{props.label}
				{!isOpen ? (
					<span>
						<FaAngleDown />
					</span>
				) : (
					<span>
						<FaAngleUp />
					</span>
				)}
			</button>
			{isOpen && <div className="content">{props.children}</div>}
		</div>
	);
}
