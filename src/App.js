import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';

import './styles/App.css';
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'aaa',
      body: 'aaa',
    },
    {
      id: 2,
      title: 'bbb',
      body: 'ccc',
    },
    {
      id: 3,
      title: 'ccc',
      body: 'bbb',
    },
    {
      id: 4,
      title: 'ccc',
      body: 'bbb',
    },
    {
      id: 5,
      title: 'AAA',
      body: '000',
    },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //!--- создание
  const createPost = (newPosts) => {
    setPosts([...posts, newPosts]);
    setModal(false);
  };

  //! Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  //!---
  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов про JS"
      />
    </div>
  );
};

export default App;
