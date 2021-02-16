import React from "react";
import "./header.css";

const Header = ({ brand, className, children }) => {
	return (
		<div className="header">
			<div className={className}>
				<h2>{brand}</h2>
				{children}
			</div>
		</div>
	);
};

export default Header;
