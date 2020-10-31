import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() { // react Component method
    this.getFeeling();
  }
  getFeeling = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/api/feeling'
    }).then((response) => {
      console.log(response);
      this.props.dispatch({ type: 'SET_FEELING', payload: response.data})
      // response.data will be the array
      this.setState({
        feeling: response.data,
      });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}
export default connect(mapStateToProps)(App);
