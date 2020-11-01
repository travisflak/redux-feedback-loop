import React, { Component } from 'react';
import { connect } from 'react-redux';

class feedbackReview extends Component {
    
    submitButton = ( event ) => { 
            this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: this.state.feedbackReview
        })
        this.props.history.push('/feeling')
      }


    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <button onClick={this.submitButton}>Submit</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
export default connect(mapStateToProps)(feedbackReview);