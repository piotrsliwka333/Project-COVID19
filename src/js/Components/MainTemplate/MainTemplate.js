import React from "react";
import {Navigation} from "./Navigation";

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

			</footer>
		</>
	)
}

