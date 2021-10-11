import React, { useEffect, useState } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/loader/Loader'
import MyModal from './components/UI/modal/MyModal'
import { useFetching } from './hooks/useFetching'
import { usePosts } from './hooks/usePosts'

import './styles/App.css'
import { getPageCount, getPagesArray } from './utils/pages'
const App = () => {
  //!--- hooks состояний
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  //!---
  let pagesArray = getPagesArray(totalPages)
  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    }
  )
  //!--- hook состояние mount
  //!--- массив зависимостей пустой - callback отработает один раз
  useEffect(() => {
    fetchPosts(limit, page)
    // return () => {
    //   console.log('useEffect clean')
    // }
  }, [])

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
    fetchPosts(limit, page)
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

      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов про JS"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default App
