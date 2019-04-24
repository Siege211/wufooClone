import React from 'react';


const ModifyField = (props) => { 
	return (
	<div>
		<h2>Modify Fields here</h2>
		{!props.selectedField&&"0"}
		{props.selectedField}
	</div>
	
	)
}

export default ModifyField;