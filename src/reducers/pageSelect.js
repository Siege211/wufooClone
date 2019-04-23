import initialState from '../store/initialState.js';

export default function pageSelect(state = initialState.page, action) {
	switch(action.type) {
		case "PAGE_SELECT":
		console.log(action);
			return Object.assign({},{page: action.page});
		default: 
			return state
	}
}