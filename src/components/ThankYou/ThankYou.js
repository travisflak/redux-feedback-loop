import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class ThankYou extends Component{

  handleChangedNewFeedback = ( event ) => {
         
      this.props.history.push('/feeling')
  }

  handleBackButton = ( event ) => {

    this.props.history.push('/feedbackReview')
  
  } 

  render() {
    return (
          <>
            <h1>THANK YOU!</h1>
            <Button variant="contained" color="primary" onClick={this.handleChangedNewFeedback}>Leave New Feedback</Button>
            <Button variant="contained" color="secondary" onClick={this.handleBackButton}>BACK</Button>
          </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(ThankYou);