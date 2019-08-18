import React, { Component } from 'react';
// import * from 'd3'

class ArticlesChart extends Component {
  container = null;

  render() {
    return <div ref = {this.itemRef}></div>
  }

  componentDidUpdate(oldProps) {
    // compare oldProps with this.props
    // update chart inside this.container
  }

  componentWillUnmount() {
    // remove all d3 stuff
  }

  itemRef = (ref) => {
    if (ref) {
      this.container = ref;
      // do smth with d3
    }
  }
}

export default ArticlesChart;