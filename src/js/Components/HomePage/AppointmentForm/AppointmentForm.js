import React, {useEffect, useRef, useState} from "react";
import lottie from "lottie-web";
import firebase from "firebase/app";
import 'firebase/firestore'

export const AppointmentForm = () => {

	const [personDetails, setPersonDetails] = useState({
		name: "",
		surname: "",
		phone: "",
		email: "",
		city: ""
	})
	let db = firebase.firestore()
	const [errors, setErrors] = useState([])
	const [status, setStatus] = useState('unActive')
	const [formSent, setFormSent] = useState(false)
	const [formSentAnimation, setFormSentAnimation] = useState(false)
	const [inputEdit, setInputEdit] = useState(false);
	const [nameError, setNameError] = useState(false)
	const [surnameError, setSurnameError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [cityError, setCityError] = useState(false)
	const [sentError,setSentError] = useState(false)

	// validation

	const nameValidation = (e) => {
		const {name, value} = e.target
		if (value.length < 2) {
			setPersonDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setNameError(true)
		} else {
			setPersonDetails(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
			setNameError(false)
		}
	}


	const checkSubmit = (e) => {
		setStatus("active")
		e.preventDefault();
		let errorArray = [];

		if (personDetails.name.length < 2) {
			errorArray.push("Too Short Name")
			setNameError(true)
		} else {
			setNameError(false)
		}
		if (personDetails.surname.length < 2) {
			errorArray.push("Too short Surname")
			setSurnameError(true)
		} else {
			setSurnameError(false)
		}
		if (personDetails.phone < 9 || isNaN(parseFloat(personDetails.phone))) {
			errorArray.push("Phone Number is not valid")
			setPhoneError(true)
		} else {
			setPhoneError(false)
		}
		if (personDetails.email < 5 || personDetails.email.indexOf('@') === -1) {
			errorArray.push("Email address need to contain @")
			setEmailError(true)
		} else {
			setEmailError(false)
		}
		if (personDetails.city < 2) {
			errorArray.push("Name of city is too short")
			setCityError(true)
		} else {
			setCityError(false)
		}

		setErrors(errorArray)
		if (errorArray.length === 0) {

			const dataToSend = {
				name: personDetails.name,
				surname: personDetails.surname,
				phone: personDetails.phone,
				email: personDetails.email,
				city: personDetails.city
			}
			db.collection('appointments').doc().set(dataToSend).then(data => {
				setFormSent(true)
				const timeout = setTimeout(() => {
					setFormSentAnimation(true)
				}, 1500)
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
			}).catch(e => {
				setSentError(true)
			})
		}
	}

	const send = useRef(null)
	useEffect(() => {
		lottie.loadAnimation({
			container: send.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../../JSON/send.json')
		})
	}, [])


	const handleChange = (e) => {
		const {name, value} = e.target;
		setPersonDetails(prevState => {
			return {
				...prevState,
				[name]: value
			}
		});
	};
	return (
		<article data-aos='fade-right' id="appointment" className="appointment col-10 col-md-6 col-xl-7">
			{formSentAnimation && <p className='info-message'>
				<span>F</span><span>o</span><span>r</span><span>m</span><span> S</span><span>e</span><span>n</span><span>t</span>
			</p>}
			<h3 className="appointment__title">Make an Appointment</h3>
			<div className={formSent ? "appointment__box form-sent" : "appointment__box"}>
				<form aria-disabled={true} onSubmit={checkSubmit} className="appointment-form">
					<label className="appointment-form__label">Name</label>
					<input type='text' disabled={inputEdit} name="name" onChange={e => handleChange(e)} value={personDetails.name}
					       className={nameError ? "appointment-form__input error" : 'appointment-form__input'}/>
					<label className="appointment-form__label">Surname</label>
					<input type='text' disabled={inputEdit} name="surname" onChange={e => handleChange(e)}
					       value={personDetails.surname}
					       className={surnameError ? "appointment-form__input error" : 'appointment-form__input'}/>
					<label className="appointment-form__label">Phone</label>
					<input type='text' disabled={inputEdit} name="phone" onChange={e => handleChange(e)}
					       value={personDetails.phone}
					       className={phoneError ? "appointment-form__input error" : 'appointment-form__input'}/>
					<label className="appointment-form__label">Email</label>
					<input type='email' disabled={inputEdit} name="email" onChange={e => handleChange(e)}
					       value={personDetails.email}
					       className={emailError ? "appointment-form__input error" : 'appointment-form__input'}/>
					<label className="appointment-form__label">City</label>
					<input type='text' disabled={inputEdit} name="city" onChange={e => handleChange(e)} value={personDetails.city}
					       className={cityError ? "appointment-form__input error" : 'appointment-form__input'}/>
					<button disabled={inputEdit} type="submit" className="appointment-form__btn">Make an Appointment</button>
					{nameError && <p className='error-message name-error'>min. 2 signs</p>}
					{surnameError && <p className='error-message surname-error'>min. 2 signs</p>}
					{phoneError && <p className='error-message phone-error'>Wrong Number</p>}
					{emailError && <p className='error-message email-error'>Wrong Email</p>}
					{cityError && <p className='error-message city-error'>min. 2 sings</p>}
					{sentError && <p className='error-message sent-error'>There was a problem with sent your form try again</p>}
				</form>
				<div className="appointment-animation" ref={send}/>
			</div>
		</article>
	)
}