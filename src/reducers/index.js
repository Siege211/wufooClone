import { combineReducers } from 'redux';
import fields from './fields.js';
import pageSelect from './pageSelect.js';
const rootReducer = combineReducers({
	pageSelect,
	fields
});

export default rootReducer;