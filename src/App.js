import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

import './styles/App.css';
const App = () => {
  const [posts] = useState([
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

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS" />
    </div>
  );
};

export default App;
