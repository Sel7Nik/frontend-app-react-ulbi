import React, { useState } from 'react';
import PostList from './components/PostList';

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
      <PostList posts={posts} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
