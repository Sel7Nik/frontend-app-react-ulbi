import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: ' Javascript 1',
      body: ' Javascript это язык программирования',
    },
  ]);

  const createNewPost = (newPosts) => {
    setPosts([...posts, newPosts]);
  };

  return (
    <div className="App">
      <PostForm create={createNewPost} />
      <PostList posts={posts} title="Список постов про JS" />
    </div>
  );
};

export default App;
