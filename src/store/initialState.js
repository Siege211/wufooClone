const initialState = { 
      page: "Add a Field",
      selectedField: null,
      fields: [
        {
          type: "textSingle"
        },
        {
          type: "textSingle"
        },
        {
          type: "textParagraph"
        },
        {
          type: "multipleChoice",
          choices: []
        },
        {
          type: "checkBoxes",
          choices: []
        }
      ] 
    };


export default initialState