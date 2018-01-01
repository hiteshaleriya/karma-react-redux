import React from 'react';

export default class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.props.likes.count + 1;
        this.props.updateLikes(newLikesCount);
    }

    render() {
        return (<div>
            Likes : <span>{this.props.likes.count}</span>
            <div>
                <button onClick={this.onLike}>Like Me</button>
            </div>
        </div>);
    }

}