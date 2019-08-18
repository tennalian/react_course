import React, {Component} from 'react';
import {normalizedComments} from '../fixtures';

class CommentsList extends Component {

  render() {
    return (
      <ul>{this.list}</ul>
    );
  }

  get list() {
    if (!this.props.article.comments || !this.props.article.comments.length) {
      return <li className="is-empty">Нет комментариев</li>
    }
    return (this.props.article.comments || []).map(id => {
      const comment = normalizedComments.find(item => item.id === id);
      if (!comment) {
        return null;
      }
      return  <li key={comment.id}>
                <span>{comment.user}</span>
                {comment.text}
              </li>
    })
  }
}

export default CommentsList;