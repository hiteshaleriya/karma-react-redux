import React from 'react';

export default class LikesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this);
    }

    sum(a, b) {
        return a+b;
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