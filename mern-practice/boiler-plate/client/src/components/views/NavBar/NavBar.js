import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<ul style={{listStyle: "none", display: "flex", justifyContent: "space-between"}}>
				<li><Link to={"./"}>HOME</Link></li>
				<li><Link to={"./login"}>LOGIN</Link></li>
				<li><Link to={"./register"}>REGISTER</Link></li>
				<li><Link to={"./video/upload"}>UPLOAD</Link></li>
			</ul>
		</div>
	)
}

export default NavBar
