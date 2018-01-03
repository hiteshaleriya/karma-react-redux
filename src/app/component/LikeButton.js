import React from 'react';
import PropTypes from 'prop-types';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <button onClick={this.props.onLike}>{this.props.title} ({this.props.count})</button>
        </div>);
    }

}

LikeButton.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    onLike: PropTypes.func
};

LikeButton.defaultProps = {
    count: 0,
    onLike: () => {}
};

export default LikeButton;