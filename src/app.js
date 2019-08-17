import React, { Component } from 'react'
import ArticleList from './components/article-list';
import {normalizedArticles} from './fixtures';

class App extends Component {
  render() {
    return (
        <ArticleList articles = {normalizedArticles} />
    )
  }
}

export default App
