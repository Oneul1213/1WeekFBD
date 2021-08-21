import React, { Component } from 'react';

class Bottom extends Component {
    render() {
        return (
            <div>{this.props.nickname}/{this.props.email}</div>
        );
    }
}

export default Bottom;