import React, {useEffect, useState} from "react";

export const HealthScoreAnimation = (props) => {
	const [score,setScore] = useState(props.healthScore)
	const [points, setPoints] = useState(50 - props.healthScore * 5)
	const [timer,setTimer] = useState(0)
	const [pointsToShow,setPointsToShow] = useState(0)


	const style = {
		borderColor: pointsToShow < 60 ? "green" : pointsToShow >= 60 && pointsToShow <= 70 ? "yellow" : "orange"
	}


	useEffect(() => {
		const interval = setInterval(()=> {
			setTimer(interval)
			setPoints(prevState => prevState + 1)
			setPointsToShow(prevState => prevState + 1)
		},50)
	},[])

	useEffect(() => {
		if(points === 100){
			clearInterval(timer)
		}
	},[points])




	return (
		<>
			<div className="progress-bar">
				<div className="progress">Loading...</div>
			</div>
			<div className="health-rate">
				<div style={style} className="circle">
					<p className="percentage">{pointsToShow}%</p>
					<div className="heart"/>
				</div>
				<div className="health-info">
					<p>Your chance <span>{pointsToShow}%</span> to be a carrier of COVID-19</p>
					<p>More than 55% ? better to enter our form</p>
					<a href="#">Enter Form</a>
				</div>
			</div>
		</>




	)
}