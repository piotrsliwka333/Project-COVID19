import "../scss/main.scss"
import React,{Component} from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";
import {HashRouter,Route} from "react-router-dom";
import {HomePage} from "./Components/HomePage/Main";

const App = () => {
	return (
		<HashRouter>
			<>
				<Route path={'/'} component={HomePage}/>
			</>
		</HashRouter>

	)
}



ReactDOM.render(
	<App/>,
	document.getElementById('app')
)