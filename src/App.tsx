import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthProvider } from './hooks/useAuth'

import { SignOutButton } from './components/SignOutButton'
import { PrivateRoute } from './components/core/PrivateRoute'
import { PublicPage } from './views/PublicPage'
import { ProtectedPage } from './views/ProtectedPage'
import { SignInPage } from './views/SignInPage'

import { Routes } from './routes'

export const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <SignOutButton />

          <ul>
            <li>
              <Link to={Routes.public}>Public Page</Link>
            </li>
            <li>
              <Link to={Routes.protected}>Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path={Routes.public}>
              <PublicPage />
            </Route>
            <Route path={Routes.signin}>
              <SignInPage />
            </Route>
            <PrivateRoute path={Routes.protected}>
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
