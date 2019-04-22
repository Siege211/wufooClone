import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import './App.css';
import FormBuilder from './components/FormBuilder.jsx';
import FormBuilderRedux from './components/FormBuilderRedux.jsx';
import FormViewer from './components/FormViewer.jsx';
import FormViewerRedux from './components/FormViewerRedux.jsx';

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
    console.log("App props:", this.props)
    return (
      <div className="App" style={appStyle}>
        <FormBuilder addField={this.addField}/>
        <FormBuilderRedux addField={this.props.actions.addField}/>
        <FormViewer 
          fields={this.state.fields}
          removeField={this.removeField}/>
          <FormViewerRedux 
          fields={this.props.fields}
          removeField={this.removeField}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    fields: state.fields
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
