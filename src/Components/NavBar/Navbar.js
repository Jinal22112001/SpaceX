import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = ({ setTrigger }) => {
	return (
		<div className="Nav_Container">
			<img
				onClick={() => setTrigger(true)}
				className="logo"
				src={logo}
				alt="spaceX"
			/>
		</div>
	);
};

export default Navbar;
