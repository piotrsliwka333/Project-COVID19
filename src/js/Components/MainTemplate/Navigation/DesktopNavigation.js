import React from "react";
import {Link} from "react-router-dom";

export const DesktopNavigation = () => {

	return (
		<nav className="desktop-navigation">
			<ul className="desktop-navigation-list">
				<DesktopNavigationElement link={'/health-test'} title={'Health Test'}/>
				<DesktopNavigationElement link={'/statistics'} title={'Statistics'}/>
				<DesktopNavigationElement link={'/news'} title={'News'}/>
				<DesktopNavigationElement link={'/contact'} title={'Contact'}/>
			</ul>
		</nav>
	)
}

const DesktopNavigationElement = ({link, title}) => {
	return (
		<li><Link className="desktop-navigation-list__element" to={`${link}`}>{title}</Link></li>
	)
}