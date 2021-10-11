import { BrowserRouter, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import './styles/App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </BrowserRouter>
  )
}

export default App
