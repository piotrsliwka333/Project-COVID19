import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Line} from 'react-chartjs-2'

export const Statistics = () => {
	const [chartData,setCharData] = useState({})
	const [dataTime,setDataTime] = useState([])
	const [confirmed,setConfirmed] = useState([])
	const date = []
	const totalConfirmed = []
	const [sorted,setSorted] = useState([])

	//algorithm to sort how many deaths or recovered was per day

	const test = [2,8,16,18,19,19,19];

	const sorting = (array) => {
		let sortedArray = [];
		let sum = array[0]
		sortedArray[0] = array[0]
		for(let i = 1; i < array.length; i++) {
			sortedArray.push( (array[i-1] - array[i])* (-1) )
		}
		return sortedArray;
	}



	const chart = () => {
		setCharData({
			labels: date, // low data
			datasets: [
				{
					label: 'level of weekness',  // main title of chart
					data: sorting(totalConfirmed), // points on a chart
					backgroundColor: [   // color of chart
						'rgba(75,192,192,0.6)'
					],
					borderWith: 4
				}
			]
		})
	}

	useEffect(() => {
		fetch('https://api.covid19api.com/dayone/country/poland')
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				data.forEach(element => {
						date.push(element.Date)
						totalConfirmed.push(element.Confirmed)
				})
			})
	},[])

// here we wait when all data will load
	useEffect(() => {
		setTimeout(() => {
			chart();
		},1000)
	},[])



	//settings






	return (
		<MainTemplate>
			<section className="statistics">
				<div className="statistics__chart">
					<Line data={chartData}/>
				</div>
				<div className="statistics-settings">
					<div className="statistics-box">
						<div className="statistics-box__country">
							<img/>
							<span>Country</span>
						</div>
					</div>
					<div className="statistics-box">

					</div>
					<div className="statistics-box">

					</div>
					<div className="statistics-box">

					</div>

				</div>
			</section>
		</MainTemplate>
	)
}