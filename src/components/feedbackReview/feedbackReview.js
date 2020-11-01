import React, { Component } from 'react';
import { connect } from 'react-redux';

class feedbackReview extends Component {
    
    handleChangedComments = ( event ) => { 
            this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: this.state.comments
        })
        this.props.history.push('/feeling')
      }


    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" onChange={(event) => this.setState({comments:event.target.value})}/>
                <button onClick={this.handleChangedComments}>NEXT</button>
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