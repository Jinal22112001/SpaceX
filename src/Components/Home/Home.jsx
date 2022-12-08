import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const getData = () => {
		setLoading(true);
		const config = {
			method: "get",
			url: `https://api.spacexdata.com/v4/launchpads`,
		};

		axios(config)
			.then(function (response) {
				if (response.data.length !== undefined) {
					setData(response.data);
				}
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return loading ? (
		<Loader></Loader>
	) : (
		<div className="HomeContainer">
			<h1>SpaceX launchpads</h1>
			{data && (
				<div className="DataContainer">
					{data.map((data) => (
						<Card key={data.title} data={data}></Card>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
