import { combineReducers } from 'redux';
import Fields from './fields.js';
const rootReducer = combineReducers({
  fields: Fields
});

export default rootReducer;