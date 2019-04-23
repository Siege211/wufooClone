import initialState from '../store/initialState.js';
import {PAGE_SELECT} from '../actions/index.js';

export default function pageSelect(state = initialState.page, action) {
	switch(action.type) {
		case "PAGE_SELECT":
		console.log(state,action);
			return Object.assign({},state,{page: action.page});
		default: 
			return state
	}
}