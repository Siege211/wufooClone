import { combineReducers } from 'redux';
import fields from './fields.js';
import pageSelect from './pageSelect.js';
import fieldSelect from './fieldSelect.js';
const rootReducer = combineReducers({
	pageSelect,
	fieldSelect,
	fields
});

export default rootReducer;