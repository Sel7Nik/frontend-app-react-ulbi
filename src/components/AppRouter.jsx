import { Route, Switch, Redirect } from 'react-router-dom'
import Error from '../pages/Error'
import { routes } from '../router/router'
const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
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
  )
}

export default AppRouter
