// decorator == HOC == Higher Order Component
import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent  {
  state = {
    openItemId: null
  }

  render() {
    return <OriginalComponent
      {...this.props}
      openItemId = {this.state.openItemId}
      toggleItem = {this.toggleItem}
    />
  }

  // всегда возвращает новую функцию с новой ссылкой,
  // все дочерние компоненты из-за него перерендерятся
  //
  // toggleItem = (id) => () => this.setState({
  //   openItemId: this.state.openItemId === id ? null : id
  // });

  toggleItem = (id) => this.setState({
    openItemId: this.state.openItemId === id ? null : id
  });

  isOpen = (id) => id === this.state.openItemId;

}