import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Comments extends Component {

    state = {
        comments: ''
    };
    
    handleChangedComments = ( event ) => {
        console.log('in comments js', this.state.comments);
         
            this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/feedbackReview')
      }

      handleBackButton = ( event ) => {

        this.props.history.push('/support')
  
      }


    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <input type="text" onChange={(event) => this.setState({comments:event.target.value})}/>
                <Button color="primary" onClick={this.handleChangedComments}>NEXT</Button>
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
export default connect(mapStateToProps)(Comments);