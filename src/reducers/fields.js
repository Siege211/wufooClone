import {addField,removeField} from '../actions/';

const initialState = {
  fields: [
        {
          type: "textSingle"
        },
        {
          type: "textParagraph"
        },
        {
          type: "multipleChoice"
        },
        {
          type: "checkBoxes"
        }
      ]
}


export default function updateFieldsList(state = initialState,action) {
  switch(action.type) {
    case "ADD_FIELD":
      return Object.assign({},{
        fields: Array.isArray(state)?state.concat({type:action.fieldType}):state.fields.concat({type:action.fieldType})
      })
    case removeField:
    return {
      ...state, data: action.fieldType
    }
    default: 
    return state.fields;
  }
  
}