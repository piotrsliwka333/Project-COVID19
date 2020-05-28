import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from '../../../../assets/logo.png'
import hamburger from '../../../../assets/hamburger.svg'

export const Hamburger = () => {
	const [showMenu,setShowMenu] = useState(false)



	const handleClick = () => {
		setShowMenu(!showMenu)
	}

	return (
		<nav className="hamburger-navigation">
		<img onClick={handleClick} className="hamburger" src={hamburger}/>
			{showMenu && <ul className="hamburger-navigation-list">
				<li className="hamburger-navigation-list__maintenance">
					<button onClick={handleClick} className="hamburger-navigation-list__maintenance-btn ">X</button>
					<Link className="hamburger-navigation-list__maintenance-logo" to={'/'}><img  onClick={handleClick} src={logo}/></Link>
					<p className="hamburger-navigation-list__maintenance-info">Your guide during the epidemic time</p>
				</li>
				<HamburgerNavigationElement closeHamburgerMenu={handleClick} link={"/health-test"} title="Health Test"/>
				<HamburgerNavigationElement closeHamburgerMenu={handleClick} link={"/statistics"} title="Statistics"/>
				<HamburgerNavigationElement closeHamburgerMenu={handleClick} link={"/news"} title="News"/>
				<HamburgerNavigationElement closeHamburgerMenu={handleClick} link={"/contact"} title="Contact"/>
			</ul>}
		</nav>
	)
}

const HamburgerNavigationElement = ({link,title,closeHamburgerMenu}) => {

	const checkFn = () => {
		if(typeof closeHamburgerMenu === "function") {
			closeHamburgerMenu();
		}
	}

	return (
		<li><Link  onClick={checkFn} className="hamburger-navigation-list__element" to={`${link}`}>{title}</Link></li>
	)
}


