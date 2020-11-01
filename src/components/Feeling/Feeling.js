import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0
    };
    
    handleChangedFeeling = ( event ) => { 
            this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding')
      }


    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <p>Feeling?</p>
                <input type="number" onChange={(event) => this.setState({feeling:event.target.value})}/>
                <button onClick={this.handleChangedFeeling}>NEXT</button>
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
