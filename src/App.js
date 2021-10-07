import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

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

  const [title, setTitle] = useState('initialState');

  const addNewPost = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyInput type="text" placeholder="Название поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS" />
    </div>
  );
};

export default App;
