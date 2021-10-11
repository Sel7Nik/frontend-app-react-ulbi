import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, ...props }) => {
  const { title, body, id } = post

  const removPost = () => {
    props.remove(post)
  }
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong className="post__content_title">
            {id}.{title}
          </strong>
          <div className="post__content_text">{body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={removPost}>Удалить</MyButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem
