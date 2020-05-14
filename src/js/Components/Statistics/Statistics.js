import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Line} from 'react-chartjs-2'

export const Statistics = () => {
	const [chartData,setCharData] = useState({})
	//settings

	const [country,setCountry] = useState('poland')

	//buttons indicates which properties selected user
	const [confirmed,setConfirmed] = useState([])
	const [recovered,setRecovered] = useState([])
	const [deaths,setDeaths] = useState([])
	const [dateFromDayOne,setDateFromDayOne] = useState([])
	const [flag,setFlag] = useState('pl')
	const [inputValue,setInputValue] = useState('')

	const [dateToShow,setDateToShow] = useState([])
	const [paramsToShow,setParamsToShow] = useState([])
	const [labelChartName,setLabelChartName] = useState('Confirmed people per One Day')
	const [total,setTotal] = useState(false)


	//algorithm to sort how many deaths or recovered was per day

	const sorting = (array) => {
		let sortedArray = [];
		let sum = array[0]
		sortedArray[0] = array[0]
		for(let i = 1; i < array.length; i++) {
			sortedArray.push( (array[i-1] - array[i])* (-1) )
		}
		return sortedArray;
	}

	//function

	const handleChangeValue = (e) => {
		setInputValue(e.target.value.toLowerCase())
	}

	const handleSubmit = () => {
		setCountry(inputValue)
		setInputValue('');
	}






	useEffect(() => {
		fetch(`https://api.covid19api.com/dayone/country/${country}`)
			.then(resp => resp.json())
			.then(data => {
				let tempDataArray = [];
				let tempConfirmedArray = [];
				let tempDeathsArray = [];
				let tempRecoveredArray = [];
				let tempFlag = ''

				data.forEach(element => {
					tempDataArray.push(element.Date.slice(0,10));
					tempConfirmedArray.push(element.Confirmed)
					tempDeathsArray.push(element.Deaths)
					tempRecoveredArray.push(element.Recovered)
					tempFlag = element.CountryCode

					// setDateFromDayOne(prevState => [...prevState,element.Date.slice(0,10)])
				})
				setDateFromDayOne(prevState => tempDataArray)
				setConfirmed(prevState => tempConfirmedArray)
				setDeaths(prevState => tempDeathsArray)
				setRecovered(prevState => tempRecoveredArray)
				setFlag(tempFlag)
				setDateToShow(prevState => tempDataArray)
				setParamsToShow(prevState => tempConfirmedArray)


			})
			.catch(err => console.log(err))
	},[country])

	const chart = (date,numbers,label) => {
		let totalSorting = [];
		if(total) {
			totalSorting = numbers

		} else {
			totalSorting = sorting(numbers)
		}
		setCharData({
			labels: date, // low data
			datasets: [
				{
					label: label,  // main title of chart
					data: totalSorting, // points on a chart
					backgroundColor: [   // color of chart
						'rgba(75,192,192,0.6)'
					],
					borderWith: 4
				}
			]
		})
	}

	useEffect(() => {

			chart(dateToShow,paramsToShow,labelChartName);

	},[paramsToShow,total])

	const handleTotalConfirmed = (e) => {
		e.preventDefault()
		setLabelChartName('Total Confirmed People')
		setParamsToShow(confirmed)
		setTotal(true)

	}

	const handlePerDayConfirmed = (e) => {
		e.preventDefault()
		setLabelChartName('Confirmed People per Day')
		setParamsToShow(confirmed)
		setTotal(false)
	}

	const handleTotalRecovered = (e) => {
		e.preventDefault();
		setLabelChartName('Total Recovered People')
		setParamsToShow(recovered)
		setTotal(true)
	}

	const handlePerDayRecovered = (e) => {
		e.preventDefault();
		setLabelChartName('Recovered People per Day')
		setParamsToShow(recovered)
		setTotal(false)
	}

	const handleTotalDeaths = (e) => {
		e.preventDefault();
		setLabelChartName('Total Deaths People')
		setParamsToShow(deaths)
		setTotal(true)
	}

	const handlePerDayDeaths = (e) => {
		e.preventDefault();
		setLabelChartName('Deaths People per Day')
		setParamsToShow(deaths)
		setTotal(false)
	}

	return (
		<MainTemplate>
			<section className="statistics">
				<div className="statistics__chart">
					<Line data={chartData}/>
				</div>
				<div className="statistics-settings">
					<div className="statistics-box">
						<div className="statistics-box__country" >
							<img className="statistics-box__country-flag" src={`https://www.countryflags.io/${flag}/shiny/64.png`}/>
							<span className="statistics-box__country-name">Country</span>
						</div>
						<form onSubmit={handleSubmit} className="statistics-box__country-select">
							<input value={inputValue} onChange={handleChangeValue} type="text" className="statistics-box__country-select-input"/>
							<button type="submit" className="statistics-box__country-select-btn">Select Country</button>
						</form>
					</div>
					<div className="statistics-box">
						<p className="statistics-box__name">Confirmed</p>
						<button  onClick={handleTotalConfirmed} className="statistics-box__option-btn">Total</button>
						<button  onClick={handlePerDayConfirmed} className="statistics-box__option-btn">Per Day</button>
					</div>
					<div className="statistics-box">
						<p className="statistics-box__name">Recovered</p>
						<button onClick={handleTotalRecovered} className="statistics-box__option-btn">Total</button>
						<button onClick={handlePerDayRecovered} className="statistics-box__option-btn">Per Day</button>
					</div>
					<div className="statistics-box">
						<p className="statistics-box__name">Deaths</p>
						<button  onClick={handleTotalDeaths} className="statistics-box__option-btn">Total</button>
						<button onClick={handlePerDayDeaths} className="statistics-box__option-btn">Per Day</button>
					</div>
				</div>
			</section>
		</MainTemplate>
	)
}