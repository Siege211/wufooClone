import { combineReducers } from 'redux';
import Fields from './fields.js';
import pageSelect from './pageSelect.js';
const rootReducer = combineReducers({
	pageSelect: pageSelect,
	fields: Fields
});

export default rootReducer;