import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import './App.css';
import FormBuilderRedux from './components/FormBuilderRedux.jsx';
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
  }


  render() {
    return (
      <div className="App" style={appStyle}>
      
        <FormBuilderRedux 
          addField={this.props.actions.addField}
          PAGE_SELECT={this.props.actions.PAGE_SELECT}
          page={this.props.page}
        />
        <FormViewerRedux 
          fields={this.props.fields}
          removeField={this.props.actions.removeField}
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    fields: state.fields,
    page: state.pageSelect
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
