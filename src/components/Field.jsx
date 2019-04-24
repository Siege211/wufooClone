import React from 'react';

const fieldStyle = {
	margin:"3px",
	alignSelf: "center",
	justifySelf: "center",
	border: "black 1px solid"
}


const Field = (props) => { 
	if (props.inputType==="textSingle") {
		return (
			<div style={fieldStyle} onClick={()=>{props.FIELD_SELECT(props.FIELD_INDEX)}}>
					<input type="text" />
					{props.children}
			</div>
		)
	}
	else if (props.inputType==="textParagraph") {
		return (
			<div style={fieldStyle}>
				<input type="text"/>
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


