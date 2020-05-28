import React, {useEffect, useState} from "react";
import worldd from '../../../../assets/worldd.png'

export const QuickStatsWorld = ({data}) => {
	const [global,setGlobal] = useState(data.Global)


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
				<img className={"quick-stats__logo-container-world"} src={worldd}/>
				<span className="quick-stats__logo-container-name">World</span>
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