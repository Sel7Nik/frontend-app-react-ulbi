import { Route, Switch, Redirect } from 'react-router-dom'
import Error from '../pages/Error'
import { privateRoutes, publicRoutes } from '../router/router'
const AppRouter = () => {
  const isAuth = false
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
