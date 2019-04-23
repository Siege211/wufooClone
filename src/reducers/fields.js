import {addField,removeField} from '../actions/';
import initialState from '../store/initialState.js';



export default function updateFieldsList(state = initialState.fields,action) {
  switch(action.type) {
    
    case "ADD_FIELD":
      return Object.assign({},{
        fields: Array.isArray(state)?state.concat({type:action.fieldType}):state.fields.concat({type:action.fieldType})
      });
    
    case "REMOVE_FIELD":
      return Object.assign({},{fields:Array.isArray(state)?state.filter((_, i) => i !== action.fieldIndex):state.fields.filter((_, i) => i !== action.fieldIndex)});
    
    default: 
      return state;
  }
  
}