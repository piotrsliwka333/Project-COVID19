import React from "react";

export const StatisticsSettingsCountryPicker = ({choseCountry, flag, country, setCountry}) => {
	return (
		<div className="statistics-box">
			<div className="statistics-box__country">
				<img className="statistics-box__country-flag" src={`https://www.countryflags.io/${flag}/shiny/64.png`}/>
				<span className="statistics-box__country-name">Country</span>
			</div>
			<form onSubmit={choseCountry} className="statistics-box__country-select">
				<input value={country} onChange={setCountry} type="text" className="statistics-box__country-select-input"/>
				<button type="submit" className="statistics-box__country-select-btn">Select Country</button>
			</form>
		</div>
	)
}