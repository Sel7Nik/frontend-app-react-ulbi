import React from 'react';

const PostItem = (props) => {
  const content_id = props.post.id;
  const content_title = props.post.title;
  const content_text = props.post.text;
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong className="post__content_title">{content_title}</strong>
          <div className="post__content_text">{content_text}</div>
        </div>
        <div className="post__btns">
          <button className="post__btn">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
