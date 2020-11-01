import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class feedbackReview extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding Data`, this.state.newBook);
        // TODO - axios request to server to add book
        Axios.post('/books', this.state.newBook).then ((response) =>{
          console.log(response.data);
          this.props.getBooks();
        }).catch((error) => {
            console.log(error);  
        });
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
                <button onClick={(event) => this.handleSubmit(event)} type='submit'>Submit</button>
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