import React, {useEffect, useState} from "react";

export const QuickStatsCountry = () => {
	const [countries,setCountries] = useState(false)
	const [selectedCountry,setSelectedCountry] = useState({
		"Country": "Afghanistan",
		"CountryCode": "AF",
		"Slug": "afghanistan",
		"NewConfirmed": 255,
		"TotalConfirmed": 4033,
		"NewDeaths": 6,
		"TotalDeaths": 115,
		"NewRecovered": 30,
		"TotalRecovered": 502,
		"Date": "2020-05-10T20:34:54Z"
	})
	const [country, setCountry] = useState("") // here we save value  by input
	const [flag,setFlag] = useState('af')
	const [error,setError] = useState(false)



	useEffect(() => {
		fetch('https://api.covid19api.com/summary',{
			method: "GET"
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data)
				setCountries(data.Countries)
			})
			.catch(err => console.log(err))

	},[])


	const countriess = [
		{
			"Country": "Afghanistan",
			"CountryCode": "AF",
			"Slug": "afghanistan",
			"NewConfirmed": 255,
			"TotalConfirmed": 4033,
			"NewDeaths": 6,
			"TotalDeaths": 115,
			"NewRecovered": 30,
			"TotalRecovered": 502,
			"Date": "2020-05-10T20:34:54Z"
		},
		{
			"Country": "Albania",
			"CountryCode": "AL",
			"Slug": "albania",
			"NewConfirmed": 6,
			"TotalConfirmed": 856,
			"NewDeaths": 0,
			"TotalDeaths": 31,
			"NewRecovered": 7,
			"TotalRecovered": 627,
			"Date": "2020-05-10T20:34:54Z"
		},
		{
			"Country": "Algeria",
			"CountryCode": "DZ",
			"Slug": "algeria",
			"NewConfirmed": 189,
			"TotalConfirmed": 5558,
			"NewDeaths": 6,
			"TotalDeaths": 494,
			"NewRecovered": 79,
			"TotalRecovered": 2546,
			"Date": "2020-05-10T20:34:54Z"
		}];

	const changeCountry = (e) => {
		setCountry(e.target.value)
	}


		const handleSelect = (e,country) => {
		e.preventDefault();

			// here we filter all elements and select only one by input value and press button
			const [selectedCountry] = countries.filter(element => element.CountryCode === country.toUpperCase() || element.Slug === country.toLowerCase())

			if (typeof selectedCountry === "undefined") {
				setError(true)
				setCountry('');

				console.log(error)
			}  else if (typeof selectedCountry  === "object") {
				setError(false)

				setSelectedCountry(selectedCountry)
				const tolowerCountryCode = selectedCountry.CountryCode.toLocaleLowerCase();
				setFlag(tolowerCountryCode) // here we set property for flag


				setCountry("")
			}

		}

	//pl mean country which we wanna to show





	return (
		<>
			<div className=" quick-stats__box">
				<div className="quick-stats__box-country">
					<img className="quick-stats__box-country-flag" src={`https://www.countryflags.io/${flag}/flat/64.png`}/>
					<span className="quick-stats__box-country-name">{selectedCountry.Country}</span>
				</div>
				<form onSubmit={(e) => handleSelect(e,country)} className="quick-stats__box-country">
					<input type="text" value={country} onChange={changeCountry} className="quick-stats__box-country-select" placeholder="chose country"/>
					<button type="submit" className="quick-stats__box-country-select-btn" >select country</button>
				</form>
			</div>
			<div className="quick-stats__box">
				<div className="quick-stats__box-section">
					<p>Confirmed</p>
					<p>{selectedCountry.TotalConfirmed}</p>
					<p>+{selectedCountry.NewConfirmed}</p>
				</div>
				<div className="quick-stats__box-section">
					<p>Recovered</p>
					<p>{selectedCountry.TotalRecovered}</p>
					<p>+{selectedCountry.NewRecovered}</p>
				</div>
				<div className="quick-stats__box-section">
					<p>Deaths</p>
					<p>{selectedCountry.TotalDeaths}</p>
					<p>+{selectedCountry.NewDeaths}</p>
				</div>
			</div>
		</>
	)
}