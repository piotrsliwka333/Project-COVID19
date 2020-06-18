import React, {useEffect, useState} from "react";
import {QuickStatsTitle} from "./QuickStatsTitle";
import {QuickStatsCountry} from "./QuickStatsCountry";
import {QuickStatsWorld} from "./QuickStatsWorld";


export const QuickStats = () => {
	const [data, setData] = useState(false)

	useEffect(() => {
		fetch('https://api.covid19api.com/summary', {
			method: "GET"
		})
			.then(resp => resp.json())
			.then(data => {
				setData(data)
			})
			.catch(err => console.log(err))

	}, [])


	if (!data) return (
		<article className="quick-stats col-10 col-md-5 col-xl-4">
			<QuickStatsTitle/>
			<div className="data-loading">
				<div className="data-loading__circle"/>
			</div>
		</article>
	)

	return (
		<article className="quick-stats col-10 col-md-5 col-xl-4">
			<QuickStatsTitle/>
			<QuickStatsCountry data={data}/>
			<QuickStatsWorld data={data}/>
		</article>
	)
}