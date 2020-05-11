import React, {useState} from "react";

export const AppointmentForm = () => {
	const [personDetails, setPersonDetails] = useState({
		name: "",
		surname: "",
		phone: "",
		email: "",
		city: ""
	})

	const [errors,setErrors] = useState(false)

	const checkSubmit = (e) => {
		e.preventDefault();
		let errorArray = [];


		if(personDetails.name.length < 2) {
			errorArray.push("Too Short Name")
		} if(personDetails.surname.length < 2) {
			errorArray.push("Too short Surname")
		} if(personDetails.phone < 9 || isNaN(parseFloat(personDetails.phone)) ) {
			errorArray.push("Phone Number is not valid")
		} if(personDetails.email < 5 || personDetails.email.indexOf('@') === -1) {
			errorArray.push("Email address need to contain @")
		} if (personDetails.city < 2) {
			errorArray.push("Name of city is too short")
		}

		setError(errorArray)
		if(errorArray.length === 0) {




			setValidation(true);
			setName("")
			setSurname("")
			setPassword("")
			setPasswordRepeat("")
			setAddress("")
			setPostcode("")
			setCity("")
		}

	}







	return (
		<article className="appointment col-10 col-md-6 col-xl-7">
			<h3 className="appointment__title">Make an Appointment</h3>
			<div className="appointment__box">
				<form className="appointment-form">
					<label className="appointment-form__label">Name</label>
					<input className="appointment-form__input"/>
					<label className="appointment-form__label">Surname</label>
					<input className="appointment-form__input"/>
					<label className="appointment-form__label">Phone</label>
					<input className="appointment-form__input"/>
					<label className="appointment-form__label">Email</label>
					<input className="appointment-form__input"/>
					<label className="appointment-form__label">City</label>
					<input className="appointment-form__input"/>
					<button className="appointment-form__btn">Make an Appointment</button>
				</form>
			</div>
		</article>
	)

}