import { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from '../context'
import Error from '../pages/Error'
import { privateRoutes, publicRoutes } from '../router/router'

//!--- AppRouter
const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
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
