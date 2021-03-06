import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {Grid} from "../Grid/Grid";
import {QuickStats} from "./QuickStats/QuickStats";
import {HealthTest} from "./HealthTest/HealthTest";
import {AppointmentForm} from "./AppointmentForm/AppointmentForm";
import {News} from "./News/news";
import {Purchase} from "./Purchase/Purchase";

export const HomePage = () => {

	return (
		<MainTemplate>
			<section className="jumbotron">
				<h1 data-aos='fade-left' className="jumbotron-title ">Your guide during the epidemic time</h1>
				<Grid>
					<HealthTest/>
					<QuickStats>
					</QuickStats>
					<AppointmentForm/>
				</Grid>
			</section>
			<section className="news">
				<h2 className="news__title">The latest News's about COVID-19</h2>
				<Grid>
					<News/>
				</Grid>
			</section>
			<section className="purchase">
				<h4 className="purchase__title">Buy protection stuff</h4>
				<Grid>
					<Purchase/>
				</Grid>
			</section>
		</MainTemplate>
	)
}