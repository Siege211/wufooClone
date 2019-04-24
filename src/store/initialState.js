const initialState = { 
      page: "Add a Field",
      selectedField: null,
      fields: [
        {
          fieldLabel: "",
          type: "textSingle"
        },
        {
          fieldLabel: "",
          type: "textSingle"
        },
        {
          fieldLabel: "",
          type: "textParagraph"
        },
        {
          fieldLabel: "",
          type: "multipleChoice",
          choices: []
        },
        {
          fieldLabel: "",
          type: "checkBoxes",
          choices: []
        }
      ] 
    };


export default initialState