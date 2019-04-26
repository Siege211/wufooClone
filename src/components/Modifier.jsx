import React from 'react';


const Modifier = (props) => { 
	console.log(props);
	return (
	<div>
		{JSON.stringify(props.fields[props.index])}
		<form>
			<div style={{border:"1px black solid"}}>
				<p>Field Label</p>
				<input type="text"/>
			</div>
		</form>
	</div>
	
	)
}

export default Modifier;