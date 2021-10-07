import React, { useRef, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: ' Javascript 1',
      body: ' Javascript это язык программирования',
    },
    {
      id: 2,
      title: 'Javascript 2',
      body: ' Javascript это язык программирования',
    },
    {
      id: 3,
      title: 'Javascript 3',
      body: ' Javascript это язык программирования',
    },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (ev) => {
    ev.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);

    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={post.title}
          onChange={(ev) => setPost({ ...post, title: ev.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyInput
          value={post.body}
          onChange={(ev) => setPost({ ...post, body: ev.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS" />
    </div>
  );
};

export default App;
