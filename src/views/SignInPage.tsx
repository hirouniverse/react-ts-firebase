import { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface LocationState {
  from: {
    pathname: string
  }
}

export const SignInPage: FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>()
  const { signin } = useAuth()

  let { from } = location.state || { from: { pathname: '/' }}

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={() => {
        signin(() => {
          history.replace(from)
        })
      }}>Log in</button>
    </div>
  )
}
