import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { Routes } from '../routes'

export const SignOutButton: FC = () => {
  const history = useHistory();
  const { user, signout } = useAuth()

  function handleSignOut() {
    if (signout) {
      signout();
      history.push(Routes.signin)
    }
  }

  return user ? (
    <div>
      Welcome!{ " " }
      <button onClick={ () => handleSignOut() }>Sign Out</button>
    </div>
  ) : (
    <div>You are not signed in...</div>
  )
}
