import "../scss/main.scss"
import React,{Component} from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {HomePage} from "./Components/HomePage/Main";
import {Statistics} from "./Components/Statistics/Statistics";
import {NewsPage} from "./Components/News/NewsPage";
import {HealthTestPage} from "./Components/HealthTest/HealthTestPage";
import {ContactPage} from "./Components/Contact/ContactPage";

const App = () => {
	return (
		<HashRouter>
			<>
				<Route exact path={'/'} component={HomePage}/>
				<Route path={'/statistics'} component={Statistics}/>
				<Route path={'/News'} component={NewsPage}/>
				<Route path={'/health-test'} component={HealthTestPage}/>
				<Route path={'/contact'} component={ContactPage}/>
			</>
		</HashRouter>

	)
}



ReactDOM.render(
	<App/>,
	document.getElementById('app')
)