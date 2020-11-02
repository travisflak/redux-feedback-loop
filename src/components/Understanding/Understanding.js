import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0
    };

    handleChangedUnderstanding = ( event ) => { 
        if(this.state.understanding < 1 || this.state.understanding > 5){
        
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
            <p>Understanding?</p>
            <input type="number" min={1} max={5} onChange={(event) => this.setState({understanding:event.target.value})}/>
            <button onClick={this.handleChangedUnderstanding}>NEXT</button>
            <button onClick={this.handleBackButton}>BACK</button>
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