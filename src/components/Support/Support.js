import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    render() {
        return (
            <p>Support</p>
        )
    }
}


export default connect()(Support);