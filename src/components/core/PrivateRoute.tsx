import { FC } from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import { Routes } from '../../routes'

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.signin,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
