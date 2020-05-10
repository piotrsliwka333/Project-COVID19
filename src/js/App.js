import "../scss/main.scss"
import React,{Component} from "react";
import ReactDOM from "react-dom";

const App = () => {
	return <h1 className="test">Hello</h1>
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)