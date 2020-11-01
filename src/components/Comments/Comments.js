import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <p>Comments</p>
        )
    }
}


export default connect()(Comments);