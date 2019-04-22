import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import './App.css';
import FormBuilderRedux from './components/FormBuilderRedux.jsx';
import FormViewerRedux from './components/FormViewerRedux.jsx';
import ReactPaginate from 'react-paginate';

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
      <ReactPaginate
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        <FormBuilderRedux addField={this.props.actions.addField}/>
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
    fields: state.fields
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
