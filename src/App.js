import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

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

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        defaultValue="Сортировка по..."
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={posts}
          title="Список постов про JS"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  );
};

export default App;
