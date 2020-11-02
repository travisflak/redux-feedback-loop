import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Understanding extends Component {

    state = {
        understanding: 0
    };

    handleChangedUnderstanding = ( event ) => {

        if(this.state.understanding < 1 || this.state.understanding > 5) {
        
        alert('must be between 1 and 5')
        }
        else {            
              this.props.dispatch({
              type: 'SET_UNDERSTANDING',
              payload: this.state.understanding
        })
            this.props.history.push('/support')
        }
    }

    handleBackButton = ( event ) => {

        this.props.history.push('/feeling')
      
    }

    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <p>Pick a number 1 through 5, 5 being the best.</p>
                <input type="number" min={1} max={5} onChange={(event) => this.setState({understanding:event.target.value})}/>
                <Button color="primary" onClick={this.handleChangedUnderstanding}>NEXT</Button>
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

export default connect(mapStateToProps)(Understanding);