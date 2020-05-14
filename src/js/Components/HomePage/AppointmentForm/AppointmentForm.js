import React, {useEffect, useRef, useState} from "react";
import lottie from "lottie-web";

export const AppointmentForm = () => {
	const API_URL = 'http://localhost:3011';
	const [personDetails, setPersonDetails] = useState({
		name: "",
		surname: "",
		phone: "",
		email: "",
		city: ""
	})

	const [errors,setErrors] = useState([])
	const [status,setStatus] = useState('unActive')
	const [inputEdit,setInputEdit] = useState(false);

	const checkSubmit = (e) => {
		setStatus("active")
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

		setErrors(errorArray)
		if(errorArray.length === 0) {

			const dataToSend = {
				name: personDetails.name,
				surname: personDetails.surname,
				phone: personDetails.phone,
				email: personDetails.email,
				city: personDetails.city
			}

			fetch(`${API_URL}/people`,{
				method: 'POST',
				body: JSON.stringify(dataToSend),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(response => response.json())
				.then(data => {
					setPersonDetails(prevState => {
						return {
							...prevState,
							name: "",
							surname: "",
							phone: "",
							email: "",
							city: "",
						}
					})
					setInputEdit(true)
				})



				.catch(error => console.log(error))

		}
	}

	const send = useRef(null)
	useEffect(()=> {
		lottie.loadAnimation({
			container: send.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../JSON/send.json')
		})
	},[])

	const formSent = useRef(null)
	useEffect(()=> {
		lottie.loadAnimation({
			container: formSent.current,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: require('../../../JSON/formSend.json')
		})
	},[])

		const handleChange = (e) => {
			const {name, value} = e.target;
			setPersonDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			});
		};

	console.log(errors.length)
	return (
		<article id="appointment" className="appointment col-10 col-md-6 col-xl-7">
			<h3 className="appointment__title">Make an Appointment</h3>
			<div className="appointment__box">
				<form aria-disabled={true} onSubmit={checkSubmit} className="appointment-form">
					<label className="appointment-form__label">Name</label>
					<input disabled={inputEdit} name="name" onChange={handleChange} value={personDetails.name} className="appointment-form__input"/>
					<label  className="appointment-form__label">Surname</label>
					<input  disabled={inputEdit} name="surname" onChange={handleChange} value={personDetails.surname} className="appointment-form__input"/>
					<label className="appointment-form__label">Phone</label>
					<input disabled={inputEdit} name="phone" onChange={handleChange} value={personDetails.phone} className="appointment-form__input"/>
					<label className="appointment-form__label">Email</label>
					<input disabled={inputEdit} name="email" onChange={handleChange} value={personDetails.email} className="appointment-form__input"/>
					<label className="appointment-form__label">City</label>
					<input disabled={inputEdit} name="city"  onChange={handleChange} value={personDetails.city} className="appointment-form__input"/>
					<button disabled={inputEdit} type="submit" className="appointment-form__btn">Make an Appointment</button>
				</form>
				<div className="appointment-animation" ref={send}/>
			</div>
		</article>
	)

}