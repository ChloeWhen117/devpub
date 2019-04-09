import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { post } = this.props;
    
    return post.comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={post._id} />
    ));
  }
}

CommentFeed.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentFeed;
