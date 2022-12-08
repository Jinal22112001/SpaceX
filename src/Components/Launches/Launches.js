import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Launches.css";

const Launches = ({ id }) => {
	const [data, setData] = useState(undefined);

	const getData = () => {
		const config = {
			method: "get",
			url: `https://api.spacexdata.com/v4/launches/${id}`,
			// url: `https://api.spacexdata.com/v4/launchpads/${id}`,
		};
		axios(config)
			.then(function (response) {
				console.log(response);
				if (response.data !== undefined) {
					setData(response.data);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		getData();
	}, [id]);

	return (
		<div className="spaceX_details">
			{data && (
				<div className="spaceX_details_div">
					<h1>{data.name}</h1>
					<h2>{"Success : " + (data.success ? "YES" : "NO")}</h2>
					<h2>{"Lunch Date : " + data.date_local.split("T")[0]} </h2>
					<p>{data.details} </p>

					{data.links && data.links.wikipedia && (
						<button
							onClick={() =>
								window.open(
									data.links.wikipedia,
									"_blank",
									"noopener,noreferrer"
								)
							}
						>
							Read More
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Launches;
