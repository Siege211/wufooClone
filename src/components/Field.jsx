import React from 'react';

const fieldStyle = {
	margin:"3px",
	alignSelf: "center",
	justifySelf: "center"
}


const Field = (props) => { 
	if (props.inputType==="textSingle") {
		return (
			<div>
					<input type="text" style={fieldStyle}/>
					{props.children}
			</div>
		)
	}
	else if (props.inputType==="textParagraph") {
		return (
			<div>
				<input type="text" style={fieldStyle}/>
				{props.children}
			</div>
		)
	}
	else if (props.inputType==="multipleChoice") {
		return(
			<div style={fieldStyle}>
				<input type="radio" name="options" value="choice 1" /> Choice 1<br/>
				<input type="radio" name="options" value="choice 2" /> Choice 2<br/>
				<input type="radio" name="options" value="choice 3" /> Choice 3<br/>
				{props.children}
			</div>
		)
	}
	else if (props.inputType === "checkBoxes") {
		return (
			<div style={fieldStyle}>
				<input type="checkbox" /> choice A <br/>
				<input type="checkbox" /> choice B <br/>
				<input type="checkbox" /> choice C <br/>
				{props.children}
			</div>
		)
	}
	else {
		return null
	}
}

export default Field;


{/*
	there will be a props.choices property for multiple choice and checkBoxes
	props.choices will come from  an array in the field object in App state
	props.choices will be a list of strings that determine the value prop of each input
*/}