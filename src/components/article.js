import React from 'react';
// stateless component => function

function Acticle({article, isOpen, toggleOpen}) {
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      </div>
      {isOpen && <p>{article.text}</p>}
    </div>
  )
}

export default Acticle;


