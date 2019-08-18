import React, { PureComponent } from 'react';
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
          <button onClick = {this.handleBtnClick}>{this.isOpen ? 'close' : 'open'}</button>
        </div>
        {this.isOpen && <p>{article.text}</p>}
      </div>
    )
  }

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id);

  get isOpen() {
    return this.props.article.id === this.props.openItemId;
  }

}

export default Acticle;


