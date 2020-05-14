import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Line} from 'react-chartjs-2'
import {StatisticsSettings} from "./StatisticsSettings";
import {StatisticsSettingsOption} from "./StatisticsSettingsOption";
import {StatisticsSettingsCountryPicker} from "./StatisticsSettingsCountryPicker";
import {StatisticsChart} from "./StatisticsChart";

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


	//algorithm to sort how many deaths,confirmed or recovered was per day

	const sorting = (array) => {
		let sortedArray = [];
		let sum = array[0]
		sortedArray[0] = array[0]
		for(let i = 1; i < array.length; i++) {
			sortedArray.push( (array[i-1] - array[i])* (-1) )
		}
		return sortedArray;
	}

	//function which control value in input and set it in a state but transformed on a lowercase to have prepare value to send request
	const handleChangeValue = (e) => {
		setInputValue(e.target.value.toLowerCase())
	}


	//function which is added on form when sombe body click  the button or press enter it will download which country and will sent request
	const handleSubmit = () => {
		console.log(inputValue)
		setCountry(inputValue)
		setInputValue('');
	}

	useEffect(() => {
		console.log(country);
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
		if(total) { // it mean that when somebody set total it download data and just only save it to variable total Sorting
			totalSorting = numbers

		} else {
			totalSorting = sorting(numbers) // it mean when somebody choose per day it will use function to  sroting per day and return sorrted array
		}
		setCharData({
			labels: date, // low data //params on bottom of chart
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

	// this useEffect run chart when one of params such as paramsToShow or total will change // total mean total or perDay

	useEffect(() => {

			chart(dateToShow,paramsToShow,labelChartName);

	},[paramsToShow,total])


	// functions which change states when somebody press the button for instance Confirmed perDay or Total Deaths
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
				<StatisticsChart chartData={chartData}/>
				<StatisticsSettings >
					<StatisticsSettingsCountryPicker choseCountry={handleSubmit} flag={flag} country={inputValue} setCountry={handleChangeValue}/>
					<StatisticsSettingsOption title="Confirmed" onTotal={handleTotalConfirmed} onPerDay={handlePerDayConfirmed}/>
					<StatisticsSettingsOption title="Recovered" onTotal={handleTotalRecovered} onPerDay={handlePerDayRecovered}/>
					<StatisticsSettingsOption title="Deaths" onTotal={handleTotalDeaths} onPerDay={handlePerDayDeaths}/>
				</StatisticsSettings>
			</section>
		</MainTemplate>
	)
}