import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Feeling extends Component {

    state = {
        feeling: 0
    };
    
    handleChangedFeeling = ( event ) => { 

        if(this.state.feeling < 1 || this.state.feeling > 5){
        
        alert('must be between 1 and 5')
        }
        else {            
          this.props.dispatch({
          type: 'SET_FEELING',
          payload: this.state.feeling
        })
          this.props.history.push('/understanding')
        }
      }

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <p>Pick a number 1 through 5, 5 being the best.</p>
                <input type="number" min={1} max={5} onChange={(event) => this.setState({feeling:event.target.value})}/>
                <Button color="primary" onClick={this.handleChangedFeeling}>NEXT</Button>
            </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
export default connect(mapStateToProps)(Feeling);
