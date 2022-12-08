import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import Launches from "../Launches/Launches";
import Loader from "../Loader/Loader";

const Details = () => {
	const param = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState(undefined);
	const [loading, setLoading] = useState(true);

	const getData = () => {
		setLoading(true);
		const config = {
			method: "get",
			url: `https://api.spacexdata.com/v4/launchpads/${param.id}`,
		};
		axios(config)
			.then(function (response) {
				console.log(response);
				if (response.data !== undefined) {
					console.log(response.data);
					setData(response.data);
				}
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
				navigate("/");
				setLoading(false);
			});
	};

	useEffect(() => {
		getData();
	}, [param.id]);
	return loading ? (
		<Loader></Loader>
	) : (
		<div className="details_mainDiv">
			{data && (
				<div className="details_div">
					<div className="detailsDiv_container">
						<div className="detailsDiv_container_div1">
							<img src={data.images.large[0]} alt={data.name} />
						</div>
						<div className="detailsDiv_container_div2">
							<h2>{data.name.toUpperCase()}</h2>
							<h5>{`Full Name : ${data.full_name}`}</h5>
							<p>{`Status : ${data.status} `} </p>
							<p>{`Locality : ${data.locality}`}</p>
							<p>{`Region : ${data.region}`}</p>
						</div>
					</div>
					<div className="details_div_detail">
						<p>{data.details}</p>
					</div>
					<div className="details_div_launchesContainer">
						<div>
							<h2 className="launch_heading">
								{data.launches.length == 0
									? "No Launch Data Available"
									: "Launches Details"}
							</h2>
							{data.launches.slice(0, 5).map((data) => (
								<Launches id={data}></Launches>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
{
	/* */
}
