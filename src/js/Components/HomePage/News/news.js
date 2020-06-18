import React, {useEffect, useState} from "react";

export const News = () => {
	const [news, setNews] = useState(false)
	const [country, setCountry] = useState('us')

	const polandNewsArray = [{"source":{"id":null,"name":"Gadzetomania.pl"},"author":null,"title":"Koronawirus. Netflix stworzył dokument, który zaskoczył oskarżeniami. I występuje w nim Bill Gates - Gadżetomania","description":"Wydawać by się mogło, że o koronawirusie wiemy już wszystko. Tymczasem przeszło 500 nowych zachorowań to najlepszy dowód na to, że dokument Netfliksa o COVID-19 wcale nie ukazuje się zbyt późno. Tym bardziej że dotyka czegoś więcej niż tylko pandemia.","url":"https://gadzetomania.pl/61579,koronawirus-netflix-stworzyl-dokument-ktory-zaskoczyl-oskarzeniami-i-wystepuje-w-nim-bill-gates","urlToImage":"https://i.wpimg.pl/1200x0/m.gadzetomania.pl/bill-fd70ea57c247531a563bb0f539c.jpg","publishedAt":"2020-06-18T09:42:06Z","content":"Stres zwizany z koronawirusem bdzie z nami, nawet gdy pandemia przestanie by zagroeniem&amp;hairsp;—&amp;hairsp;mówi Idris Elba, narrator najnowszego odcinka netfliksowego dokumentu \"Wyjaniamy: Koron… [+4295 chars]"},{"source":{"id":null,"name":"Interia.pl"},"author":null,"title":"Wirus HIV może ukrywać się w mózgu - Interia","description":"Kliknij i zobacz więcej.","url":"https://nt.interia.pl/raporty/raport-medycyna-przyszlosci/medycyna/news-wirus-hiv-moze-ukrywac-sie-w-mozgu,nId,4557358","urlToImage":"https://i.iplsc.com/-/000A79L26MNE4BBL-C411.jpg","publishedAt":"2020-06-18T09:00:55Z","content":"HIV moe ukrywa si w komórkach mózgowych, a stamtd wykorzystywa biae krwinki do transportu do innych narzdów.\r\nZdjcieAstrocyty i naczynia krwionone/123RF/PICSEL\r\nBadania przeprowadzone przez amerykask… [+1802 chars]"},{"source":{"id":null,"name":"Abczdrowie.pl"},"author":null,"title":"Koronawirus. U bezobjawowych COVID-19 też powoduje uszkodzenia w płucach - abczdrowie.pl","description":"- Osoby przechodzące koronawirusa w sposób bezobjawowy są główną przeszkodą w powstrzymaniu pandemii – czytamy w najnowszym badaniu naukowców z Scripps Research...","url":"https://portal.abczdrowie.pl/koronawirus-u-bezobjawowych-covid-19-tez-powoduje-uszkodzenia-w-organizmie","urlToImage":"https://i.wpimg.pl/648x0/portal-abczdrowie.wpcdn.pl/imageCache/2020/06/17/gettyimages-1213737775-170667a_b85e.jpg","publishedAt":"2020-06-18T08:58:41Z","content":"- Osoby przechodzce koronawirusa w sposób bezobjawowy s gówn przeszkod w powstrzymaniu pandemii czytamy w najnowszym badaniu naukowców z Scripps Research Institute w USA. Jednak najbardziej zaskakujc… [+5928 chars]"},{"source":{"id":null,"name":"Tech.wp.pl"},"author":"Klaudia Stawska","title":"Nie da się rozwinąć odporności na koronawirusa? Niepokojące wyniki badania z Wuhan - Wirtualna Polska","description":"Najnowsze badanie przeprowadzone na pracownikach medycznych z Wuhan, sugeruje, że ludzie mogą nigdy nie wytworzyć przeciwciał na COVID-19. Do tego wniosku doszedł zespół składający się z chińskich i amerykańskich","url":"https://tech.wp.pl/nie-da-sie-rozwinac-odpornosci-na-koronawirusa-niepokojace-wyniki-badania-z-wuhan-6522750742488705a","urlToImage":"https://v.wpimg.pl/NjU0Nzg2YQs0UjhJSElsHncKbBMOEGJIIBJ0WEgCYVtmAH4CUAF_RTNZIh8VVz4Fe1c8DxdTORp7QCJVBkInRSMBYR4OQT4GNElhHwpQKw56AX4eBAUrC2IddkJTVmNebQl-VwYFfgh4VnhIUVcrUzYDLUhfEDM=","publishedAt":"2020-06-18T08:54:00Z","content":"Najnowsze badanie, omówione w serwisie medRxiv.org, zostao przeprowadzone na ponad 23 000 pracownikach medycznych, którzy walczyli z epidemi w Wuhan od koca zeszego roku. Zdaniem autorów opracowania,… [+3095 chars]"},{"source":{"id":null,"name":"Londynek.net"},"author":"PAP / Marcin R.","title":"Naukowcy z Londynu: 350 mln ludzi na świecie zagrożonych Covid-19 - Londynek","description":"Jedna piąta ludzi na ziemi (1,7 mld) ma chorobę współistniejącą, która może zwiększać ryzyko ciężkieg","url":"https://londynek.net/wiadomosci/article?jdnews_id=68432","urlToImage":"https://londynek.net/image/jdnews-agency/2191248/195138-202006171909-lg2.jpg","publishedAt":"2020-06-18T08:30:00Z","content":"Naukowcy z London School of Hygiene and Tropical Medicine (LSHTM), razem z kolegami z Chin i USA, oszacowali liczb osób na wiecie, które ze wzgldu na chorob wspóistniejc, maj podwyszone ryzyko cikieg… [+2398 chars]"},{"source":{"id":null,"name":"Natemat.pl"},"author":"Zuzanna Tomaszewicz","title":"Prof. Krzysztof Simon o tym, jak wygląda najczęstszy pacjent Covid-19 - naTemat.pl","description":"Prof. Krzysztof Simon w programie Onet Rano zdradził, jak najczęściej wyglądają osoby zakażone koronawirusem. Wśród typów podał otyłego mężczyzna, cukrzyka oraz starsze osoby. Epidemiolog podkreślił też, że większość nosicieli zakażenie przebiega bezobjawowo.…","url":"https://natemat.pl/312103,prof-krzysztof-simon-o-tym-jak-wyglada-najczestszy-pacjent-covid-19","urlToImage":"https://m.natemat.pl/07a6e4b96682d65f765d8c7331ac37e1,1024,0,0,0.jpg","publishedAt":"2020-06-18T07:23:18Z","content":null}]
	const usNewsArray = [{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Steroid dexamethasone a life-saving treatment for very ill Covid-19 patients, UK study indicates - South China Morning Post","description":"Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtube The World Health Organisation has welcomed preliminary results of a drugs tri...","url":"https://www.youtube.com/watch?v=TIGjwFC-S1Q","urlToImage":"https://i.ytimg.com/vi/TIGjwFC-S1Q/maxresdefault.jpg","publishedAt":"2020-06-18T07:41:14Z","content":null},{"source":{"id":null,"name":"CNBC"},"author":"Ryan Browne","title":"Facebook, YouTube usage linked to belief in coronavirus conspiracy theories, study finds - CNBC","description":"The study also found that people who use social media to find information on the virus are more likely to have broken lockdown rules.","url":"https://www.cnbc.com/2020/06/17/social-media-usage-linked-to-belief-in-coronavirus-conspiracy-theories.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/106581463-1592407626072gettyimages-1208944400.jpeg?v=1592407747","publishedAt":"2020-06-18T05:12:18Z","content":"In this photo illustration a smartphone screen reading \"Covid 19\" and \"coronavirus disease\" is displayed as logos of social media applications are seen behind, in Ankara, Turkey on April 2, 2020.\r\nPe… [+4183 chars]"},{"source":{"id":null,"name":"The Guardian"},"author":"Michael Adno in Immokalee, Florida","title":"'Our bills won't wait': the Florida town where farm laborers risk their lives to work amid Covid-19 - The Guardian","description":"A lack of healthcare access and a dearth of testing has led to one of the densest concentrations of Covid-19 cases in the state","url":"https://www.theguardian.com/us-news/2020/jun/17/farmworkers-covid-19-immokalee-florida","urlToImage":"https://i.guim.co.uk/img/media/906c765f5e90c49a859889dcc3ae60eb61d1cea6/0_0_3738_2243/master/3738.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=39c7f20e81e6201efa21643f83f643a2","publishedAt":"2020-06-18T05:00:00Z","content":"The threat of falling ill haunted Angelina Velasquez as spring spilled into summer. It followed her like a ghost as she boarded a bus alongside 40 other farmworkers every day. Ive been worried, she s… [+12963 chars]"},{"source":{"id":null,"name":"San Francisco Chronicle"},"author":"Matt Kawahara","title":"California sets new record for most new coronavirus cases in a day: exceeding 4,000 - San Francisco Chronicle","description":"<p>County health departments reported 4,134 new cases as of Wednesday evening, with four counties still yet to report. The state’s previous single-day high was 3,683 cases last Friday.</p>","url":"https://www.sfchronicle.com/news/article/California-sets-new-record-for-most-new-15348122.php","urlToImage":"https://s.hdnux.com/photos/01/12/45/65/19553605/5/rawImage.jpg","publishedAt":"2020-06-18T04:22:31Z","content":"California reported a record number of new coronavirus cases Wednesday, eclipsing 4,000 new cases in a single day for the first time, according to county data compiled by The Chronicle.\r\nCounty healt… [+1026 chars]"},{"source":{"id":null,"name":"Raw Story"},"author":"Sarah K. Burris","title":"Trump falsely claims COVID-19 is ‘dying out’ in Oklahoma — as cases ‘soar far above anything the state has seen so far’ - Raw Story","description":"President Donald Trump told a Washington Post reporter Wednesday that he’s not worried about the coronavirus anymore because it’s “dying out.” In a video posted by JM Rieger, Trump reveals that he believes that the numbers in Oklahoma, where he intends to hol…","url":"https://www.rawstory.com/2020/06/trump-falsely-claims-covid-19-is-dying-out-in-oklahoma-as-cases-soar-far-above-anything-the-state-has-seen-so-far/","urlToImage":"https://www.rawstory.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-17-at-10.02.21-PM.png","publishedAt":"2020-06-18T04:07:30Z","content":"President Donald Trump told a Washington Post reporter Wednesday that he’s not worried about the coronavirus anymore because it’s “dying out.” \r\nIn a video posted by JM Rieger, Trump reveals that he … [+3277 chars]"}]

	// NEWS.api changed their policy and right now we can display dates only in development so Too present my app news section I created these two arrays with data to be able to display date on a server in english and in polish
	// const arrayToDisplay = function (country) {
	// 	if(country === 'pl') {
	// 		setNews(polandNewsArray)
	// 	} if(country === 'us') {
	// 		setNews(usNewsArray)
	// 	}
	// }
	// useEffect(() => {
	// 	arrayToDisplay(country)
	// },[country])


	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=4576f91fb26c4904bb121c124fc905e0`, {
			method: 'GET'
		})
			.then(resp => resp.json())
			.then(data => setNews(data.articles))
			.catch(err => console.log(err))

	}, [country])

	const changeRegion = (e) => {
		e.preventDefault();
		const {name} = e.target
		setCountry(name)

	}

	// when the title length will be too long it will cut it on last world and add ... at the end
	const handleArticleLength = (element) => {
		let fixedTitle = ''
		let lastIndexOfBreak = 0;
		if (element.title.length > 100) {
			lastIndexOfBreak = element.title.slice(0, 100).lastIndexOf(" ");
		}
		if (element.title.length < 100) {
			return element.title
		} else {
			return `${element.title.slice(0, lastIndexOfBreak)}`
		}
	}

	if (!news) return <li>Data Loading</li>
	return (
		<>
			<div className="control-panel__settings">
				<button name='pl' onClick={changeRegion}
				        className="control-panel__settings-language">pl
				</button>
				<button name='us' onClick={changeRegion}
				        className="control-panel__settings-language">eng
				</button>
			</div>
			{news[4].urlToImage && <OneNews checkLength={handleArticleLength} element={news[4]} />}
			{news[3].urlToImage && <OneNews checkLength={handleArticleLength} element={news[3]} />}
			{news[2].urlToImage && <OneNews checkLength={handleArticleLength} element={news[2]} />}
			{news[1].urlToImage && <OneNews checkLength={handleArticleLength} element={news[1]} />}
			{news[0].urlToImage && <OneNews checkLength={handleArticleLength} element={news[0]} />}
		</>
	)
}


const OneNews = (props) => {
	const {element,checkLength} = props
	return (
		<div className={`news-container col-11 col-md-5 col-xl-5`}>
			<figure className="news-image-box">
				<img className="news-image" src={element.urlToImage}/>
			</figure>
			<a href={element.url} target="_blank" className="news-title">{checkLength(element)}</a>
			<a className="news-read-more" target="_blank" href={element.url}>
				<i className="fas fa-bookmark"/>
			</a>
		</div>
	)
}