import React from "react";
import {NavLink} from "react-router-dom";

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
		<li><NavLink className="desktop-navigation-list__element " activeClassName='active' to={`${link}`}>{title}</NavLink>
		</li>
	)
}