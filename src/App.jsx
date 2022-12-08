import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details/Details";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
