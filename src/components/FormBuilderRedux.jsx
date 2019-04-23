import React from 'react';
import AddField from './AddField.jsx';
import ModifyField from './ModifyField.jsx';
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

//unordered list
// 100% width
//flex-fill/flex grow

//ul list item
	// 33% width
const pageSelectionStyle = {
	display: "inline-block",
	paddingLeft: "15px",
   paddingRight: "15px",
	width: "100%"
}

const pageNameStyle = {
	width: "33%",
	display: "inline-block"
}


const buttonNames = [
	"textSingle",
	"textParagraph",
	"multipleChoice",
	"checkBoxes"
]

const pageNames = [
	"Add a Field",
	"Field Settings",
	"Form Settings"
]

const FormBuilder = (props) => { 
	console.log(props.PAGE_SELECT);
	return (

	<div style={builderStyle}>
		<span style={pageSelectionStyle}>
				{pageNames.map(
					(pageName,i) => {
						return (
							<div 
								key={`page#${i}`} 
								style={pageNameStyle}
								onClick={()=>{props.PAGE_SELECT(pageName)}}
							>
								{pageName}
							</div>
						)
					}
				)}
		</span>
		{props.page==="Add a Field" && <AddField addField={props.addField}/>}
		{props.page==="Field Settings" && <ModifyField/>}
	</div>
	
	)
}

export default FormBuilder;