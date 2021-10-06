import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post }) => {
  const { id, title, text } = post;
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <h2 className="post__id">{id}</h2>
          <strong className="post__content_title">{title}</strong>
          <div className="post__content_text">{text}</div>
        </div>
        <div className="post__btns">
          {/* <button className="post__btn">Удалить</button> */}
          <MyButton>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
