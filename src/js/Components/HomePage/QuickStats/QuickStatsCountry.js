import React, {useState} from "react";

export const QuickStatsCountry = ({data}) => {
	const [countries, setCountries] = useState(data.Countries)
	const [selectedCountry, setSelectedCountry] = useState(data.Countries[133])
	const [country, setCountry] = useState("") // here we save value  by input
	const [flag, setFlag] = useState('pl')
	const [error, setError] = useState(false)

	const changeCountry = (e) => {
		setCountry(e.target.value)
	}

	const handleSelect = (e, country) => {
		e.preventDefault();
		// here we filter all elements and select only one by input value and press button
		const [selectedCountry] = countries.filter(element => element.CountryCode === country.toUpperCase() || element.Slug === country.toLowerCase())

		if (typeof selectedCountry === "undefined") {
			setError(true)
			setCountry('');

		} else if (typeof selectedCountry === "object") {
			setError(false)
			setSelectedCountry(selectedCountry)
			const tolowerCountryCode = selectedCountry.CountryCode.toLocaleLowerCase();
			setFlag(tolowerCountryCode) // here we set property for flag
			setCountry("")
		}
	}
	//pl mean country which we wanna to show

	if (!countries) return (
		<div className="data-loading">
			<div className="data-loading__circle"/>
		</div>
	)

	return (
		<>
			<div className=" quick-stats__box">
				<div className="quick-stats__box-country">
					<img className="quick-stats__box-country-flag" src={`https://www.countryflags.io/${flag}/flat/64.png`}/>
					<span className="quick-stats__box-country-name">{selectedCountry.Country}</span>
				</div>
				<form onSubmit={(e) => handleSelect(e, country)} className="quick-stats__box-country">
					<input type="text" value={country} onChange={changeCountry} className="quick-stats__box-country-select"
					       placeholder="norway , germany etc."/>
					<button type="submit" className="quick-stats__box-country-select-btn">select country</button>
				</form>
			</div>
			<div className="quick-stats__box">
				<QuickStatsBoxElement title='Confirmed' total={selectedCountry.TotalConfirmed}
				                      newCases={selectedCountry.NewConfirmed}/>
				<QuickStatsBoxElement title='Recovered' total={selectedCountry.TotalRecovered}
				                      newCases={selectedCountry.NewRecovered}/>
				<QuickStatsBoxElement title='Deaths' total={selectedCountry.TotalDeaths} newCases={selectedCountry.NewDeaths}/>
			</div>
		</>
	)
}

export const QuickStatsBoxElement = (props) => {
	const {title, total, newCases} = props
	return (
		<div className="quick-stats__box-section">
			<p>{title}</p>
			<p>{total}</p>
			<p>+{newCases}</p>
		</div>
	)
}