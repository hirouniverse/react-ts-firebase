import { FC } from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import { DynamicPage } from './DynamicPage'
import { Routes } from '../routes'
import { useAuth } from '../hooks/useAuth'
import { SignOutButton } from '../components/SignOutButton'

export const ProtectedPage: FC = () => {
  const { path, url } = useRouteMatch();

  const { user } = useAuth();

  return (
    <>
      <h3>Protected</h3>

      {user &&
        <>
          <SignOutButton />
          <div>Welcome</div>
        </>
      }

      <h4>Links</h4>
      <ul>
        <li>
          <Link to={Routes.protected}>Protected Page</Link>
        </li>
      </ul>
      <br />

      <h4>Sub Pages</h4>
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
