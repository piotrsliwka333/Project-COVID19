import React from "react"

export const Grid = (props) => {
	return (
		<div className="container">
			<div className="row">
				{props.children}
			</div>
		</div>
	)
}