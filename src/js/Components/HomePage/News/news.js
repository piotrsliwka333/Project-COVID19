import React, {useEffect, useState} from "react";
import {Grid} from "../../Grid/Grid";

export const News = () => {
	const [news,setNews] = useState(false)
	const API_URL = 'http://newsapi.org/v2/top-headlines?country=pl&category=health&apiKey=4576f91fb26c4904bb121c124fc905e0'



	useEffect(() => {

		fetch('http://newsapi.org/v2/top-headlines?country=pl&category=health&apiKey=4576f91fb26c4904bb121c124fc905e0',{
			method: 'GET'
		})
			.then(resp => resp.json())
			.then(data => setNews(data.articles))
			.catch(err => console.log(err))

	},[])



	if(!news) return <li>Data Loading</li>

	return (
		<>


			{news[4].urlToImage && <>
				<div className="news-container col-10 col-md-5 col-xl-5">
					<figure>
						<img  src={news[4].urlToImage}/>
					</figure>
					<p>{news[4].title}</p>
					<a target="_blank" href={news[4].url}>Read more</a>
				</div>
				</>}
			{news[3].urlToImage && <>
				<div className="news-container col-10 col-md-5 col-xl-5">
					<figure>
						<img  src={news[3].urlToImage}/>
					</figure>
					<p>{news[3].title}</p>
					<a target="_blank" href={news[3].url}>Read more</a>
				</div>
			</>}
			{news[2].urlToImage && <>
				<div className="news-container col-10 col-md-5 col-xl-5">
					<figure>
						<img  src={news[2].urlToImage}/>
					</figure>
					<p>{news[2].title}</p>
					<a target="_blank" href={news[2].url}>Read more</a>
				</div>
			</>}
			{news[1].urlToImage && <>
				<div className="news-container col-10 col-md-5 col-xl-5">
					<figure>
						<img  src={news[1].urlToImage}/>
					</figure>
					<p>{news[1].title}</p>
					<a target="_blank" href={news[1].url}>Read more</a>
				</div>
			</>}
			{news[0].urlToImage && <>
				<div className="news-container col-10 col-md-5 col-xl-5">
					<figure>
						<img  src={news[0].urlToImage}/>
					</figure>
					<p>{news[0].title}</p>
					<a target="_blank" href={news[0].url}>Read more</a>
				</div>
			</>}
		</>
	)
}