import React from 'react';


const ModifyField = (props) => { 
	console.log(props);
	return (
	<div>
		<h2>Modify Fields here</h2>
		{JSON.stringify(props.fields[props.selectedField])}
	</div>
	
	)
}

export default ModifyField;