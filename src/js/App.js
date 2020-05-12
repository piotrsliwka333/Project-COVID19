import "../scss/main.scss"
import React,{Component} from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";
import {HashRouter,Route} from "react-router-dom";
import {HomePage} from "./Components/HomePage/Main";
import {Statistics} from "./Components/Statistics/Statistics";

const App = () => {
	return (
		<HashRouter>
			<>
				<Route exact path={'/'} component={HomePage}/>
				<Route path={'/statistics'} component={Statistics}/>
			</>
		</HashRouter>

	)
}



ReactDOM.render(
	<App/>,
	document.getElementById('app')
)