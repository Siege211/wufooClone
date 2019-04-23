import React from 'react';

const builderStyle = {
	width: "95%",
	height: "90%",
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

const AddField = (props) => { 
	return (
	<div style={builderStyle}>
		{buttonNames.map(
			(btnName,i) => {
				return(
					<button 
						style={btnStyle}
						key={`Button#${i}`}
						onClick={()=>{props.addField(btnName)}}>
						{btnName}
					</button>
				)
			}
		)}
	</div>
	
	)
}

export default AddField;