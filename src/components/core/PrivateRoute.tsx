import { FC } from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

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
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
