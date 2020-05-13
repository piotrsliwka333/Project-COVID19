import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Grid} from "../Grid/Grid";


export const NewsPage = () => {
	const [country,setCountry] = useState('pl')
	const [news,setNews] = useState(false)
	const [settings,setSettings] = useState(false)
	const [darkTheme,setDarkTheme] = useState(false)



	useEffect(() => {

		fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=4576f91fb26c4904bb121c124fc905e0`,{
			method: 'GET'
		})
			.then(resp => resp.json())
			.then(data => {
				setNews(data.articles)
				console.log(data)
			})

			.catch(err => console.log(err))

	},[country])



	const randomSize = () => {
		let randomArray = [5,5,5,5,10]
		let randomNumber = Math.floor((Math.random() * 5) )

		return randomArray[randomNumber]
	}


	const changeRegion = (e) => {
		e.preventDefault();
		const {name} = e.target
		setCountry(name)

	}


	const handleOpenSettings = (e) => {
		e.preventDefault();
		setSettings(!settings)
	}

	const handleChangeDarkTheme = (e) => {
		if(e.target.checked) {


		}
		setDarkTheme(!darkTheme)
	}

	const styleDarkTheme = {
		backgroundColor: darkTheme === true ? 'rgb(33, 35, 36)' : "#cdcaca",
		color: darkTheme === true ? '#eeeeee' : "rgb(33, 35, 36)"
	}







	if(!news) {
		return (
			<MainTemplate>
				<section style={styleDarkTheme} className="news-page">
					<div className="control-panel">
						<h1 style={styleDarkTheme} className="news-page__title">The Latest News about COVID-19</h1>
						<div className="control-panel__settings">
						<span onClick={e => handleOpenSettings(e)} className="control-panel__settings-icon">
							<i style={styleDarkTheme} className="fas fa-cog">
							</i>
						</span>
							{settings && <div style={styleDarkTheme} className="dark-theme">
								<label >Dark Theme</label>
								<input checked={darkTheme} type='checkbox' onChange={handleChangeDarkTheme}/>

							</div>}
							<button style={styleDarkTheme} name='pl' onClick={changeRegion} className="control-panel__settings-language">pl</button>
							<button style={styleDarkTheme} name='us' onClick={changeRegion} className="control-panel__settings-language">eng</button>
						</div>
					</div>
					<div className="data-loading">
						<h2 className="data-loading__circle">Hello</h2>
					</div>
				</section>
			</MainTemplate>
		)
	}

	return (
		<MainTemplate>
			<section style={styleDarkTheme} className="news-page">
				<div className="control-panel">
					<h1 style={styleDarkTheme} className="news-page__title">The Latest News about COVID-19</h1>
					<div className="control-panel__settings">
						<span onClick={e => handleOpenSettings(e)} className="control-panel__settings-icon">
							<i style={styleDarkTheme} className="fas fa-cog">
							</i>
						</span>
						{settings && <div style={styleDarkTheme} className="dark-theme">
								<label >Dark Theme</label>
								<input checked={darkTheme} type='checkbox' onChange={handleChangeDarkTheme}/>

						</div>}
						<button style={styleDarkTheme} name='pl' onClick={changeRegion} className="control-panel__settings-language">pl</button>
						<button style={styleDarkTheme} name='us' onClick={changeRegion} className="control-panel__settings-language">eng</button>
					</div>
					<Grid>
						{news.map((element,index) => {
							return (
								<div key={index} className={`news-container col-11 col-md-5 col-xl-${randomSize()}`}>
									<figure className="news-image-box">
										<img  className="news-image" src={element.urlToImage}/>
									</figure>
									<a href='#' className="news-title" >{element.title}</a>
									<a className="news-read-more" target="_blank" href={element.url}>
										<i className="fas fa-bookmark"/>
									</a>
								</div>
							)
						})}

					</Grid>
				</div>


			</section>
		</MainTemplate>
	)

}