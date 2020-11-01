import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0
    };

    handleChangedUnderstanding = ( event ) => { 
        this.props.dispatch({
        type: 'SET_UNDERSTANDING',
        payload: this.state.understanding
    })
    this.props.history.push('/support')
  }
    render() {
        return (
            <>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input type="number" onChange={(event) => this.setState({understanding:event.target.value})}/>
            <button onClick={this.handleChangedUnderstanding}>NEXT</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
export default connect(mapStateToProps)(Understanding);