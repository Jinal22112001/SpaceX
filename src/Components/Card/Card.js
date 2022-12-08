import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
	const navigate = useNavigate();
	const { images, name, full_name, details, status, id, launches } = data;

	return (
		<div className="data_div" onClick={() => navigate(id)}>
			<div className="data_div1">
				<img loading="lazy" src={images.large[0]} alt={name} />
			</div>

			<div className="data_div2">
				<h2>{name.toUpperCase()}</h2>
				<h6>{full_name.toUpperCase()}</h6>
				<h4>{`status : ${status} `.toUpperCase()} </h4>
				<p id="data_contentID">{details}</p>
			</div>
		</div>
	);
};

export default Card;
