import React from 'react';
import Modifier from './Modifier.jsx';

const ModifyField = (props) => { 
	return (
	<div>
		<h2>Modify Fields here</h2>
		{props.selectedField!==null && <Modifier 
					fields={props.fields}
					index={props.selectedField}
				/>}
	</div>
	
	)
}

export default ModifyField;