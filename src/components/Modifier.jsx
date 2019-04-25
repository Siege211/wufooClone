import React from 'react';


const Modifier = (props) => { 
	console.log(props);
	return (
	<div>
		{JSON.stringify(props.fields[props.index])}
	</div>
	
	)
}

export default Modifier;