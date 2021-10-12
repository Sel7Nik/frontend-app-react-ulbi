import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService.js'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import MyModal from '../components/UI/modal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver.js'
import { usePosts } from '../hooks/usePosts'

import '../styles/App.css'
import { getPageCount, getPagesArray } from '../utils/pages'
const Posts = () => {
  //!--- hooks состояний
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()
  //!---

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    }
  )
  //!---
  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  //!--- hook состояние mount
  //!--- массив зависимостей пустой - callback отработает один раз
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page])

  //!--- создание
  const createPost = (newPosts) => {
    setPosts([...posts, newPosts])
    setModal(false)
  }

  //! Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  //!---
  const changePage = (page) => {
    setPage(page)
  }
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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов про JS"
      />
      <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
      {isPostLoading && <Loader />}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  )
}

export default Posts
