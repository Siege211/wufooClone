class Field_Object {
	constructor(type, value=null, placeHolder = null, fieldLabel = null, choices = null, range = null) {
		this.type = type;
		this.fieldLabel = fieldLabel;
		this.choices = choices;
		this.range = range;
		this.value = value;
		this.placeHolder = placeHolder;
	}
}


export default Field_Object;

// {
//           fieldLabel: "",
//           type: "multipleChoice",
//           choices: []
//         }

//this.range for numbers = [min Num, max Num];

//this.range for text = [min num, maxNum, words/characters]