import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component{

    handleChangedNewFeedback = ( event ) => {
         
        this.props.history.push('/feeling')
      }

    render() {
        return (
            <>
                <h1>THANK YOU!</h1>
                <button onClick={this.handleChangedNewFeedback}>Leave New Feedback</button>
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