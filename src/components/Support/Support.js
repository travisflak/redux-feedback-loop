import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: 0
    };
    
    handleChangedSupport = ( event ) => {

      if(this.state.support < 1 || this.state.support > 5){
        
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


    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <p>Support?</p>
                <input type="number" min={1} max={5} onChange={(event) => this.setState({support:event.target.value})}/>
                <button onClick={this.handleChangedSupport}>NEXT</button>
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