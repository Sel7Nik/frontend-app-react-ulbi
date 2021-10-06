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
      title: '2. Javascript 2',
      text: ' Javascript это язык программирования',
    },
    {
      id: 3,
      title: '3. Javascript 3',
      text: ' Javascript это язык программирования',
    },
  ]);
  const [posts2, setPosts2] = useState([
    {
      id: 1,
      title: '1. Pyton 1',
      text: ' Pyton это язык программирования',
    },
    {
      id: 2,
      title: '2. Pyton 2',
      text: ' Pyton это язык программирования',
    },
    {
      id: 3,
      title: '3. Pyton 3',
      text: ' Pyton это язык программирования',
    },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов про JS" />
      <PostList posts={posts2} title="Список постов про Pyton" />
    </div>
  );
};

export default App;
