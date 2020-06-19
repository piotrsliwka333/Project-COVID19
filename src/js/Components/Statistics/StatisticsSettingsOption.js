import React from "react";

export const StatisticsSettingsOption = ({title, onTotal, onPerDay}) => {
	return (
		<div className="statistics-box">
			<p className="statistics-box__name">{title}</p>
			<button onClick={onTotal} className="statistics-box__option-btn">Total</button>
			<button onClick={onPerDay} className="statistics-box__option-btn">Per Day</button>
		</div>
	)
}