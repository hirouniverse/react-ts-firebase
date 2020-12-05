import { FC } from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest}) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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
