import initialState from '../store/initialState.js';
import Field_Object from '../fieldObject.js';


export default function updateFieldsList(state = initialState.fields,action) {

  switch(action.type) {
    
    case "ADD_FIELD":
      return [...state, new Field_Object(action.fieldType)]
        //fields: Array.isArray(state)?state.concat({type:action.fieldType}):state.fields.concat({type:action.fieldType})
    case "REMOVE_FIELD":
      return state.filter((_, i) => i !== action.fieldIndex);

        // Object.assign({},{fields:Array.isArray(state)?
        //   state.filter((_, i) => i !== action.fieldIndex)
        //   :state.fields.filter((_, i) => i !== action.fieldIndex)});
    
    default: 
      return state;
  }
  
}