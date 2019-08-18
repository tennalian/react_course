// decorator == HOC == Higher Order Component
import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent  {
  state = {
    openItemId: null,
    openItemCommentId: null
  }

  render() {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        toggleComment = {this.toggleComment}
        toggleItem = {this.toggleItem}/>
    )
  }

  toggleItem = (id) => this.setState({
    openItemId: this.state.openItemId === id ? null : id
  });

  toggleComment = (id) => this.setState({
    openItemCommentId: this.state.openItemCommentId === id ? null : id
  });


}