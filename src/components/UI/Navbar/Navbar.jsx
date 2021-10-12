import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logOut = (ev) => {
    setIsAuth(false)
  }
  return (
    <div className="navbar">
      <MyButton onClick={logOut}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О нас</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  )
}
export default Navbar
