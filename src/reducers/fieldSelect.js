import initialState from '../store/initialState.js';

export default function fieldSelect(state = initialState.selectedField, action) {
	
	switch(action.type) {
		case "FIELD_SELECT":
			return action.index
		default: 
			return state
	}
}