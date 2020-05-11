import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Grid} from "../Grid/Grid";
import {QuickStats} from "./QuickStats/QuickStats";
import {QuickStatsTitle} from "./QuickStats/QuickStatsTitle";
import {QuickStatsCountry} from "./QuickStats/QuickStatsCountry";
import {QuickStatsWorld} from "./QuickStats/QuickStatsWorld";
import {HealthTest} from "./HealthTest/HealthTest";
import {AppointmentForm} from "./AppointmentForm/AppointmentForm";
import {News} from "./News/news";

export const HomePage = () => {



	return (
		<MainTemplate>
			<section className="jumbotron">
				<h1 className="jumbotron-title ">Your guide during the epidemic time</h1>
					<Grid>
						<HealthTest/>
						<QuickStats>
							<QuickStatsTitle/>
							<QuickStatsCountry/>
							<QuickStatsWorld/>
						</QuickStats>
						<AppointmentForm/>
				</Grid>
			</section>
			<section className="news">
				<h2 className="news__title">The latest News's about CONVID-19</h2>
				<Grid>
					<News/>
				</Grid>
			</section>
		</MainTemplate>
	)
}