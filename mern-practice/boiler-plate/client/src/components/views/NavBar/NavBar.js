import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div style={{backgroundColor: "black"}}>
			<ul style={{
				listStyle: "none", 
				display: "flex", 
				justifyContent: "space-around",
				}}>
				<li><Link to={"./"}>HOME</Link></li>
				<li><Link to={"./login"}>LOGIN</Link></li>
				<li><Link to={"./register"}>REGISTER</Link></li>
				<li><Link to={"./video/upload"}>UPLOAD</Link></li>
			</ul>
		</div>
	)
}

export default NavBar
