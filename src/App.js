import React from 'react';
import './styles/App.css';
const App = () => {
  const content_title = '1. Javascript';
  const content_text = ' Javascript это язык программирования';
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong className="post__content_title">{content_title}</strong>
          <div className="post__content_text">{content_text}</div>
        </div>
        <div className="post__btns">
          <button className="post__btn">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default App;
