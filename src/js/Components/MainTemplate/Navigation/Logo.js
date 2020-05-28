import React from "react";
import {Link} from "react-router-dom";
import logo from '../../../../assets/logo.png'

export const Logo = () => {


	return (
		<Link className="logo" to={'/'}><img className="logo" src={logo}/></Link>
	)
}