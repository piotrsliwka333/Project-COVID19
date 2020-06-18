import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {AppointmentForm} from "../HomePage/AppointmentForm/AppointmentForm";

export const ContactPage = () => {

	return (
		<MainTemplate>
			<section className="contact">
				<AppointmentForm/>
			</section>
		</MainTemplate>
	)
}