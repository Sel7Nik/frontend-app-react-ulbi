import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post, ...props }) => {
  const { title, body } = post;
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong className="post__content_title">
            {props.number}.{title}
          </strong>
          <div className="post__content_text">{body}</div>
        </div>
        <div className="post__btns">
          <MyButton>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
