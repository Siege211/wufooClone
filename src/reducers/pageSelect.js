import initialState from '../store/initialState.js';

export default function pageSelect(state = initialState.page, action) {
	
	switch(action.type) {
		case "PAGE_SELECT":
			return action.page
		default: 
			return state
	}
}