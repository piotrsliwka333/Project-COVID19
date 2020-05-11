import React, {useEffect, useState} from "react";

export const QuickStatsCountry = () => {
	const [countries ,setCountries] = useState(false)
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



	// useEffect(() => {
	// 	fetch('https://api.covid19api.com/summary',{
	// 		method: "GET"
	// 	})
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			setCountries(data.Countries)
	// 		})
	// 		.catch(err => console.log(err))
	//
	// },[])
	// console.log(countries)

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
			const [selectedCountry] = countriess.filter(element => element.CountryCode === country.toUpperCase())
			if (selectedCountry === "undefined") {
				setError(true)
				console.log(error)
			}  else if (selectedCountry !== "undefined") {
				setSelectedCountry(selectedCountry)
				const tolowerCountryCode = selectedCountry.CountryCode.toLocaleLowerCase();
				setFlag(tolowerCountryCode)
				console.log(tolowerCountryCode);
				console.log(selectedCountry.Country);
				setCountry("")
			}

		}

	//pl mean country which we wanna to show
	return (
		<>
			<div className=" quick-stats__box">
				<div>
					<img src={`https://www.countryflags.io/${flag}/flat/64.png`}/>
				<span className="quick-stats__box-country">Country</span>
				</div>
				<div>
					<input type="text" value={country} onChange={changeCountry} className="quick-stats__box-select-country" placeholder="write shortcut of country ex. pl"/>
					<button onClick={(e) => handleSelect(e,country) } >select country</button>
				</div>
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
			{error && <p>Not right Value</p>}
		</>
	)
}