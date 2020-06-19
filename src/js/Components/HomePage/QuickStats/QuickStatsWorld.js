import React, {useState} from "react";
import worldd from '../../../../assets/worldd.png'
import {QuickStatsBoxElement} from "./QuickStatsCountry";

export const QuickStatsWorld = ({data}) => {
	const [global, setGlobal] = useState(data.Global)

	return (
		<>
			<div className="quick-stats__logo-container">
				<img className={"quick-stats__logo-container-world"} src={worldd}/>
				<span className="quick-stats__logo-container-name">World</span>
			</div>
			<div className="quick-stats__box">
				<QuickStatsBoxElement title='Confirmed' total={global.TotalConfirmed}
				                      newCases={global.NewConfirmed}/>
				<QuickStatsBoxElement title='Confirmed' total={global.TotalConfirmed}
				                      newCases={global.NewConfirmed}/>
				<QuickStatsBoxElement title='Confirmed' total={global.TotalConfirmed}
				                      newCases={global.NewConfirmed}/>
			</div>
		</>
	)
}