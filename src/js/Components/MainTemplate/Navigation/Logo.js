import React from "react";
import {Link} from "react-router-dom";

export const Logo = () => {


	return (
		<Link className="logo" to={'/'}><img className="logo" src='../../../../assets/logo.png'/></Link>
	)
}