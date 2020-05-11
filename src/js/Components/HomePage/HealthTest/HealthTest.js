import React, {useState} from "react";
import {HealthTestForm} from "./HealthTestForm";
import {HealthScoreAnimation} from "./HealthScoreAnimation";

export const HealthTest = (props) => {
	const [formDisplay,setFormDisplay] = useState(true)
	const [healthScore,setHealthScore] = useState(0)




	const handleConfirmForm = (e,score) => {
		e.preventDefault()
		setFormDisplay(!formDisplay)
		setHealthScore(score)

	}

	return (
		<article className="health-test col-10 col-md-5 col-6" >
				<h2 className={"health-test__title"}>Fell a little bit under the weather ? </h2>
				<div className={"health-test__box"}>
					<h3 className={"health-test__box-title"}>Do the Health Test</h3>
					{formDisplay && <HealthTestForm closeForm={handleConfirmForm}/>}
					{!formDisplay && <HealthScoreAnimation healthScore={healthScore}/>}


				</div>

		</article>
	)

}