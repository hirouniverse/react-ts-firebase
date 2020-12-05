import { FC } from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import { DynamicPage } from './DynamicPage'

export const ProtectedPage: FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h3>Protected</h3>
      <ul>
        <li>
          <Link to={`${url}/nest1`}>Nest Route 1</Link>
        </li>
        <li>
          <Link to={`${url}/nest2`}>Nest Route 2</Link>
        </li>
        <li>
          <Link to={`${url}/nest3`}>Nest Route 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <div>Please select one of routes...</div>
        </Route>
        <Route path={`${url}/:selectedRoute`}>
          <DynamicPage />
        </Route>
      </Switch>

    </>
  )
}
