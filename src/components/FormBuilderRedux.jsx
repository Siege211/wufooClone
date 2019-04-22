import React from 'react';

const builderStyle = {
	width: "50%",
	padding: "5px",
	border: "red 1px solid",
	display: "flex",
	flexDirection: "column"
}
const btnStyle= {
	margin: "3px"
}

const buttonNames = [
	"textSingle",
	"textParagraph",
	"multipleChoice",
	"checkBoxes"
]

const FormBuilder = (props) => { 
	return (

	<div style={builderStyle}>
		{buttonNames.map(
			(btnName,i) => {
				return(
					<button 
						style={btnStyle}
						key={`Button#${i}`}
						onClick={()=>{console.log("at invocation:",props.addField);props.addField(btnName)}}>
						{btnName}
					</button>
				)
			}
		)}
	</div>
	
	)
}

export default FormBuilder;