import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './components/FormBuilder.jsx';
import FormViewer from './components/FormViewer.jsx';

const appStyle = {
  display: "flex",
  flexDirection: "row"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
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
    };
    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
  }
  addField(fieldType) {
    //uses setState to add a field object to state.fields
    console.log(fieldType.btnName);
    this.setState(prevState => ({
      fields: [...prevState.fields,{type:fieldType.btnName}]
    }))
  }

  removeField(field_Index) {
    console.log(field_Index);
    this.setState({
      fields: this.state.fields.filter((_, i) => i !== field_Index)
    })
  }

  render() {
    return (
      <div className="App" style={appStyle}>
        <FormBuilder addField={this.addField}/>
        <FormViewer 
          fields={this.state.fields}
          removeField={this.removeField}/>
      </div>
    );
  }
}

export default App;
