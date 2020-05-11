import React, {useState} from "react";

export const QuickStatsWorld = () => {
	const [global,setGlobal] = useState({
		"NewConfirmed": 98580,
		"TotalConfirmed": 5498088,
		"NewDeaths": 4296,
		"TotalDeaths": 367155,
		"NewRecovered": 33350,
		"TotalRecovered": 1408329
	})

	const world = {
			"NewConfirmed": 98580,
			"TotalConfirmed": 5498088,
			"NewDeaths": 4296,
			"TotalDeaths": 367155,
			"NewRecovered": 33350,
			"TotalRecovered": 1408329
		};





	return (
		<>
			<div className="quick-stats__logo-container">
				<img className={"quick-stats__logo-container-world"} src="../../../../assets/worldd.png"/>
				<span>World</span>
			</div>
			<div className="quick-stats__box">
				<div className="quick-stats__box-section">
					<p>Confirmed</p>
					<p>{global.TotalConfirmed}</p>
					<p>+{global.NewConfirmed}</p>
				</div>
				<div className="quick-stats__box-section">
					<p>Recovered</p>
					<p>{global.TotalRecovered}</p>
					<p>+{global.NewRecovered}</p>
				</div>
				<div className="quick-stats__box-section">
					<p>Deaths</p>
					<p>{global.TotalDeaths}</p>
					<p>+{global.NewDeaths}</p>
				</div>
			</div>
		</>
	)


}