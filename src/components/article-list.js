import React, {Component} from 'react';
import Article from './article';
import accordeon from '../decorators/accordeon';

//statefull component => class

class ArticleList extends Component {

  get body() {
    const { articles, openItemId, toggleItem, openItemCommentId, toggleComment } = this.props;
    return articles.map(article =>
      <li key = {article.id}>
        <Article
          article = {article}
          toggleOpenItem = {toggleItem}
          toggleOpenComment = {toggleComment}
          openItemId = {openItemId}
          openItemCommentId = {openItemCommentId}
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

export default accordeon(ArticleList);
