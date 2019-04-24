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
	let iterable = props.fields.fields?props.fields.fields:props.fields;
	return (

	<form style={formStyle}>
		
		{
			iterable.map( 

			 (field,i) => {
			 		return (
			 			<Field 
			 				key={`field#${i}`} 
			 				inputType={field.type}
			 				FIELD_SELECT={props.FIELD_SELECT}
			 			>
			 				<div style={{color:"red"}} onClick={()=>props.removeField(i)}>Delete this field</div>
			 				
			 			</Field>
			 		)
			} 

		)}

	</form>
	
	)
}

export default FormViewerRedux;