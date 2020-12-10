import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthProvider } from './hooks/useAuth'

import { PrivateRoute } from './components/core/PrivateRoute'
import { HomePage } from './views/HomePage'
import { ProtectedPage } from './views/ProtectedPage'
import { SignInPage } from './views/SignInPage'
import { SignUpPage } from './views/SignUpPage'

import { Routes } from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'

export const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path={Routes.home}>
              <HomePage />
            </Route>
            <Route path={ Routes.signup }>
              <SignUpPage />
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
