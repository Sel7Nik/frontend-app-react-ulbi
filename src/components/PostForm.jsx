import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (ev) => {
    ev.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
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
  );
};

export default PostForm;
