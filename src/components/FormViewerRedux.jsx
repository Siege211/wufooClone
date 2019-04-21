import React from 'react';
import Field from './Field.jsx';

const formStyle = {
	display: "flex",
	flexDirection: "column",
	width: "50%",
	padding: "5px",
	border: "blue 1px solid"
}

const FormViewerRedux = (props) => { 
	return (

	<form style={formStyle}>
		
		{props.fields.map( 

			 (field,i) => {
			 		return (
			 			<Field key={`field#${i}`} inputType={field.type}>
			 				<div style={{color:"red"}} onClick={()=>props.removeField(i)}>Delete this field</div>
			 				
			 			</Field>
			 		)
			} 

		)}

	</form>
	
	)
}

export default FormViewerRedux;