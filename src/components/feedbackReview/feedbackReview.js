import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Button } from '@material-ui/core';

class feedbackReview extends Component {

    handleSubmit = (event) => {
        let newData = {
            feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportReducer,
            comments: this.props.reduxState.commentsReducer
        }

        event.preventDefault();
        console.log(`Adding Data`, newData);
        // TODO - axios request to server to add data
        Axios.post('/api/feeling', newData).then ((response) =>{
          console.log('in axios POST', response.data);
          this.props.history.push('/ThankYou')
        }).catch((error) => {
            console.log(error);  
        });
    }

    handleBackButton = ( event ) => {

    this.props.history.push('/comments')
  
    }


    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                <ul>
                    <li>{this.props.reduxState.feelingReducer}</li>
                    <li>{this.props.reduxState.understandingReducer}</li>
                    <li>{this.props.reduxState.supportReducer}</li>
                    <li>{this.props.reduxState.commentsReducer}</li>
                </ul>
                <Button color="primary" onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</Button>
                <Button color="secondary" onClick={this.handleBackButton}>BACK</Button>
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