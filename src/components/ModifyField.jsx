import React from 'react';
import Modifier from './Modifier.jsx';

const ModifyField = (props) => { 
	console.log(props);
	return (
	<div>
		<h2>Modify Fields here</h2>
		{JSON.stringify(props.fields[props.selectedField])}
		<Modifier />
	</div>
	
	)
}

export default ModifyField;