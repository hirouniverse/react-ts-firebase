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

export const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <SignOutButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <SignInPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
