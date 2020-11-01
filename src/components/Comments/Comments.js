import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    };
    
    handleChangedComments = ( event ) => { 
            this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/feedbackReview')
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
export default connect(mapStateToProps)(Comments);