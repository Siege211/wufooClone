import initialState from '../store/initialState.js';
import Field_Object from '../fieldObject.js';


export default function updateFieldsList(state = initialState.fields,action) {

  switch(action.type) {
    
    case "ADD_FIELD":
      return [...state, new Field_Object(action.fieldType)]
        
    case "REMOVE_FIELD":
      return state.filter((_, i) => i !== action.fieldIndex);

    case "MODIFY_FIELD":
      // there is already a selected field
      // so the index isn't what is needed here
      // the change to that index is the important information
      return state
    default: 
      return state;
  }
  
}