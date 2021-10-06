import React from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
const App = () => {
  const content_id = 1;
  const content_title = '1. Javascript';
  const content_text = ' Javascript это язык программирования';
  return (
    <div className="App">
      <PostItem
        post={{ id: content_id, title: content_title, text: content_text }}
      />
      <PostItem
        post={{ id: content_id, title: content_title, text: content_text }}
      />
      <PostItem
        post={{ id: content_id, title: content_title, text: content_text }}
      />
      <PostItem
        post={{ id: content_id, title: content_title, text: content_text }}
      />
    </div>
  );
};

export default App;
