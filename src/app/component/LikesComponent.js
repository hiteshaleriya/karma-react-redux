import React from 'react';
import LikeButton from "./LikeButton.js";

export default class LikesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.props.likes.count + 1;
        this.props.updateLikes(newLikesCount);
    }

    render() {
        return (<div className="likes-container">
            <p>Likes: {this.props.likes.count}</p>
            <LikeButton title="Like Me" count={this.props.likes.count} onLike={this.onLike} />
        </div>);
    }

}