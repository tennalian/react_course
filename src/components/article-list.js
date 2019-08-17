import React, {Component} from 'react';
import Article from './article';
//statefull component => class

export default class ArticleList extends Component {
  state = {
    articleId: null
  }

  toggleArticle = (id) => () => this.setState({
    articleId: this.state.articleId === id ? null : id
  });

  isOpen = (id) => id === this.state.articleId;

  get body() {
    return this.props.articles.map(article =>
      <li key = {article.id}>
        <Article
          article = {article}
          toggleOpen = {this.toggleArticle(article.id)}
          isOpen = { this.isOpen(article.id) }
        />
      </li>
    );
  }
  render() {
    return (
      <ul>
        {this.body}
      </ul>
    )
  }
}
