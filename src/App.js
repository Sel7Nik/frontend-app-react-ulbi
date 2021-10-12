import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import About from './pages/About'
import Error from './pages/Error'
import Posts from './pages/Posts'
import './styles/App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
