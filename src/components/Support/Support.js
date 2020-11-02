import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Support extends Component {

    state = {
        support: 0
    };
    
  handleChangedSupport = ( event ) => {

    if(this.state.support < 1 || this.state.support > 5) {
        
      alert('must be between 1 and 5')
    }
    else {            
      this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state.support
  })
      this.props.history.push('/comments')
    }
  }

  handleBackButton = ( event ) => {

    this.props.history.push('/understanding')
  
  }

  render() {
      return (
      <>
        <h1>How well are you being supported?</h1>
        <p>Pick a number 1 through 5, 5 being the best.</p>
        <input type="number" min={1} max={5} onChange={(event) => this.setState({support:event.target.value})}/>
        <Button color="primary" onClick={this.handleChangedSupport}>NEXT</Button>
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

export default connect(mapStateToProps)(Support);