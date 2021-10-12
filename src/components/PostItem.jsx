import React from 'react'
import MyButton from './UI/button/MyButton'
import { useHistory } from 'react-router-dom'
const PostItem = ({ post, ...props }) => {
  const { title, body, id } = post

  const removPost = () => {
    props.remove(post)
  }
  const router = useHistory()
  console.log(router)

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
          <MyButton
            style={{ marginBottom: '5px' }}
            onClick={() => router.push(`/posts/${id}`)}
          >
            Открыть
          </MyButton>
          <MyButton style={{ marginBottom: '5px' }} onClick={removPost}>
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem
