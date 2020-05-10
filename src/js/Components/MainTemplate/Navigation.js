import React from "react";
import {HashRouter,Link} from "react-router-dom";
import {Logo} from "./Navigation/Logo";
import {Hamburger} from "./Navigation/Hamburger";
import {DesktopNavigation} from "./Navigation/DesktopNavigation";

export const Navigation  = () => {

// 462x207
	return (
		<HashRouter>
			<div className="navigation-container">
				<Logo/>
				<Hamburger/>
				<DesktopNavigation/>
			</div>
		</HashRouter>


	)
}