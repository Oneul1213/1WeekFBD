import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <div>
                <p>{this.props.large_category}/{this.props.small_category}</p>
                <div>{this.props.content_title}</div>
                <p>{this.props.uploader} . {this.props.upload_date}</p>
            </div>
        );
    }
}

export default Title;