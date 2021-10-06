import React from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
const App = () => {
  const id = 1;
  const title = '1. Javascript';
  const text = ' Javascript это язык программирования';
  return (
    <div className="App">
      <h1 className="App__title" style={{ textAlign: 'center' }}>
        Список постов
      </h1>
      <PostItem post={{ id: id, title: title, text: text }} />
      <PostItem post={{ id: id, title: title, text: text }} />
      <PostItem post={{ id: id, title: title, text: text }} />
      <PostItem post={{ id: id, title: title, text: text }} />
    </div>
  );
};

export default App;
