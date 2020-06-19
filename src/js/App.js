import "../scss/main.scss"
import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {HomePage} from "./Components/HomePage/Main";
import {Statistics} from "./Components/Statistics/Statistics";
import {NewsPage} from "./Components/News/NewsPage";
import {HealthTestPage} from "./Components/HealthTest/HealthTestPage";
import {ContactPage} from "./Components/Contact/ContactPage";
import firebase from "firebase/app";
import Aos from "aos";

let firebaseConfig = {
	apiKey: "AIzaSyBubUwSTnc_VkaJWI4FmVFQAU8Bu2ee8CQ",
	authDomain: "covid-19-d50da.firebaseapp.com",
	databaseURL: "https://covid-19-d50da.firebaseio.com",
	projectId: "covid-19-d50da",
	storageBucket: "covid-19-d50da.appspot.com",
	messagingSenderId: "454821267607",
	appId: "1:454821267607:web:331f23c74874ac432e01d2",
	measurementId: "G-6LPQ0EZJW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
	useEffect(() => {
		Aos.init({duration: 1000})
	},[])
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