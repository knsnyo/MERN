import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<ul>
				<li><Link to={"./"}>HOME</Link></li>
				<li><Link to={"./login"}>LOGIN</Link></li>
				<li><Link to={"./register"}>REGISTER</Link></li>
			</ul>
		</div>
	)
}

export default NavBar
