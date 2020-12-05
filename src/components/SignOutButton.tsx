import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const SignOutButton: FC = () => {
  const history = useHistory();
  const { isAuthenticated, signout } = useAuth()

  return isAuthenticated ? (
    <div>
      Welcome!{ " " }
      <button onClick={() => signout(() => history.push("/login"))}>Sign Out</button>
    </div>
  ) : (
    <div>You are not signed in...</div>
  )
}
