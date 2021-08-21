import React, { Component } from 'react'
import './Top.css'

class Top extends Component {
    render() {
      return (
        <div class='container'>{this.props.name}</div>
      );
    }
  }

export default Top;