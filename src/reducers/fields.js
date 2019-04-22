import {addField,removeField} from '../actions/';
import initialState from '../store/initialState.js';
// const initialState = {
//   fields: [
//         {
//           type: "textSingle"
//         },
//         {
//           type: "textParagraph"
//         },
//         {
//           type: "multipleChoice"
//         },
//         {
//           type: "checkBoxes"
//         }
//       ]
// }


export default function updateFieldsList(state = initialState,action) {
  switch(action.type) {
    case "ADD_FIELD":
      return Object.assign({},{
        fields: Array.isArray(state)?state.concat({type:action.fieldType}):state.fields.concat({type:action.fieldType})
      });
    case "REMOVE_FIELD":
    return Object.assign({},{fields:Array.isArray(state)?state.filter((_, i) => i !== action.fieldIndex):state.fields.filter((_, i) => i !== action.fieldIndex)});
    default: 
    return state.fields;
  }
  
}