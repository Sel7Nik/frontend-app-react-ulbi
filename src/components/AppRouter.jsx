import { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from '../context'
import Error from '../pages/Error'
import { privateRoutes, publicRoutes } from '../router/router'
import Loader from './UI/loader/Loader'

//!--- AppRouter
const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}

export default AppRouter
