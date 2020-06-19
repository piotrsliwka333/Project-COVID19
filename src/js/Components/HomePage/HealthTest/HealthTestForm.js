import React, {useState} from "react"

export const HealthTestForm = (props) => {
	const [healthPoints, setHealthPoints] = useState(0)

	const handleClick = (e) => {  // here we check if input is checked or not
		// and animation will show in % how much chance we have
		// to have COVID 19
		if (e.target.checked === true) {
			setHealthPoints(prevState => prevState + 1)
		} else {
			setHealthPoints(prevState => prevState - 1)
		}
	}

	return (
		<div className={"health-test__form-box"}>
			<form className="health-test__form">
				<div className="health-test__form-boxes">
					<label>Do you have a fever ?</label>
					<input type="checkbox" onClick={(e) => handleClick(e)}/>
				</div>
				<div className="health-test__form-boxes">
					<label>Do you have dry cough ?</label>
					<input onClick={(e) => handleClick(e)} type="checkbox"/>
				</div>
				<div className="health-test__form-boxes">
					<label>Do you feel more tired than usually</label>
					<input onClick={(e) => handleClick(e)} type="checkbox"/>
				</div>
				<div className="health-test__form-boxes">
					<label>Do you have nasal congestion</label>
					<input onClick={(e) => handleClick(e)} type="checkbox"/>
				</div>
				<div className="health-test__form-boxes">
					<label>Do you have shortness of breath</label>
					<input onClick={(e) => handleClick(e)} type="checkbox"/>
				</div>
				<div className="health-test__form-boxes">
					<label>Do you loss of taste</label>
					<input onClick={(e) => handleClick(e)} type="checkbox"/>
				</div>
				<button onClick={(e) => props.closeForm(e, healthPoints)} className="health-test__form-btn">Confirm Your
					Symptoms
				</button>
			</form>
		</div>
	)
}