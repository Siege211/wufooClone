export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';

export function addField(fieldType = null) {
  return {
    type: ADD_FIELD,
    fieldType: fieldType
  }
}



export function removeField(field_Index) {
    
    return {
    	type: REMOVE_FIELD,
    	fieldIndex: field_Index
    } 
}

export function PAGE_SELECT(page) {
  return {
    type: "PAGE_SELECT",
    page: page
  }
}


export function FIELD_SELECT(field_Index = null) {
  return {
    type: "FIELD_SELECT",
    index: field_Index
  }
}

export function MODIFY_FIELD(field_Index) {
  return {
    type: "MODIFY_FIELD",
    index: field_Index
  }
}