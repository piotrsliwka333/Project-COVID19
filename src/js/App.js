import "../scss/main.scss"
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
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