import React from "react";
import {Logo} from "./Navigation/Logo";
import {Hamburger} from "./Navigation/Hamburger";
import {DesktopNavigation} from "./Navigation/DesktopNavigation";

export const Navigation = () => {
	return (
		<div className="navigation-container">
			<Logo/>
			<Hamburger/>
			<DesktopNavigation/>
		</div>
	)
}