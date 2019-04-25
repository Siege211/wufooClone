import React from 'react';

const fieldStyle = {
	margin:"3px",
	alignSelf: "center",
	justifySelf: "center",
	border: "black 1px solid"
}


const Field = (props) => { 
	console.log(props)


	if (props.type==="textSingle") {
		return (
			<div 
				style={fieldStyle} 
				onClick={()=>{props.FIELD_SELECT(props.FIELD_INDEX)}}
			>
				<p>{props.field_Label}</p>
				<input type="text" />
				{props.children}
			</div>
		)
	}
	else if (props.type==="textParagraph") {
		return (
			<div 
				style={fieldStyle}
				onClick={()=>{props.FIELD_SELECT(props.FIELD_INDEX)}}
			>
				<p>{props.field_Label}</p>
				<input type="text"/>
				{props.children}
			</div>
		)
	}
	else if (props.type==="multipleChoice") {
		return(
			<div 
				style={fieldStyle}
				onClick={()=>{props.FIELD_SELECT(props.FIELD_INDEX)}}
			>
				<p>{props.field_Label}</p>
				{props.choices.map( 
					(choice, i) => {
						return (
							<div>
							<input 
								type={choice.type}
								name={`${choice.name}#${props.FIELD_INDEX}`}
								value={choice.value}
							/>{choice.text}
							</div>
						)
							
					}
				)}
				{props.children}
			</div>
		)
	}
	else if (props.type === "checkBoxes") {
		return (
			<div 
				style={fieldStyle}
				onClick={()=>{props.FIELD_SELECT(props.FIELD_INDEX)}}
			>
				<p>{props.field_Label}</p>
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


