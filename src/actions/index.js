export const ADD_FIELD = 'ADD_FIELD';

export function addField(fieldType = null) {
  console.log(fieldType);
  return {
    type: ADD_FIELD,
    fieldType
  }
}