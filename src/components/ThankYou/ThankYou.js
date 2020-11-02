import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.handleChangedNewFeedback}>Leave New Feedback</button>
                <button onClick={this.handleBackButton}>BACK</button>
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