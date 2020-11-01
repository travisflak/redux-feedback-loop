import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {

  // componentDidMount() { // react Component method
    // this.getFeeling();
  // }
  // getFeeling = () => {
  //   // just like $.ajax()
  //   axios({
  //     method: 'GET',
  //     url: '/api/feeling'
  //   }).then((response) => {
  //     console.log(response);
  //     this.props.dispatch({ type: 'SET_FEELING', payload: response.data})
  //     // response.data will be the array
  //     this.setState({
  //       feeling: response.data,
  //     });
  //   });
  // }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/feeling" component={Feeling}/>
            <Route path="/understanding" component={Understanding}/>
            <Route path="/support" component={Support}/>
            <Route path="/comments" component={Comments}/>
          
        <br/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}
export default connect(mapStateToProps)(App);
