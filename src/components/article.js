import React, { PureComponent } from 'react';
import CommentsList from './comments-list'
// stateless component => function
// будет перестраиваться при каждом обновлении

// function Acticle({article, isOpen, toggleOpen}) {
//   return (
//     <div>
//       <div>
//         <h3>{article.title}</h3>
//         <button onClick = {toggleOpen}>{isOpen ? 'close' : 'open'}</button>
//       </div>
//       {isOpen && <p>{article.text}</p>}
//     </div>
//   )
// }

// В PureComponent реализован shouldComponentUpdate

class Acticle extends PureComponent {

  render() {
    const {article} = this.props;
    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick = {this.handlerClick}>{this.isOpenItem ? 'close' : 'open'}</button>
          <button onClick = {this.handlerCommentsClick}>{this.isOpenComment ? 'close comment' : 'open comments'}</button>
        </div>
        {this.isOpenItem && <p>{article.text}</p>}
        {this.isOpenComment && <CommentsList article={article}/>}
      </div>
    )
  }

  handlerClick = () => this.props.toggleOpenItem(this.props.article.id)

  handlerCommentsClick = () => this.props.toggleOpenComment(this.props.article.id)

  get isOpenItem() {
    return  this.props.article.id === this.props.openItemId;
  }

  get isOpenComment() {
    return  this.props.article.id === this.props.openItemCommentId;
  }

}

export default Acticle;


