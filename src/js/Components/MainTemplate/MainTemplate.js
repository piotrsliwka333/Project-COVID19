import React from "react";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";

export const MainTemplate  = (props) => {

	return (
		<>
			<header>
				<Navigation/>
			</header>
			<main>
				{props.children}
			</main>
			<footer>
				<Footer/>
			</footer>
		</>
	)
}

