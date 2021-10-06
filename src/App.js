import React, { useState } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '1. Javascript 1',
      text: ' Javascript это язык программирования',
    },
    {
      id: 2,
      title: '1. Javascript 2',
      text: ' Javascript это язык программирования',
    },
    {
      id: 3,
      title: '1. Javascript 3',
      text: ' Javascript это язык программирования',
    },
  ]);

  return (
    <div className="App">
      <h1 className="App__title" style={{ textAlign: 'center' }}>
        Список постов
      </h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default App;
