import React from "react";
import {Line} from "react-chartjs-2";

export const StatisticsChart = ({chartData}) => {
	return (
		<div className="statistics__chart">
			<Line data={chartData}/>
		</div>
	)
}