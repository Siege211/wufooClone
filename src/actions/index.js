export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export function addField(fieldType = null) {
  return {
    type: ADD_FIELD,
    fieldType: fieldType
  }
}



export function removeField(field_Index) {
    console.log(field_Index);
    // this.setState({
    //   fields: this.state.fields.filter((_, i) => i !== field_Index)
    // })
    return {
    	type: REMOVE_FIELD,
    	fieldIndex: field_Index
    } 
  }