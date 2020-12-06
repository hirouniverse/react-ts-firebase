import { FC, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { signin } from '../repository/Auth'

interface LocationState {
  from: {
    pathname: string
  }
}

export const SignInPage: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const location = useLocation<LocationState>()

  let { from } = location.state || { from: { pathname: '/' }}

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null && passwordConfirmRef.current !== null) {

      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        console.log('password doesn\'t match')
        return
      }
      
      signin(emailRef.current.value, passwordRef.current.value).then(() => {
        history.replace('/')
        return
      })
    } else {
      console.log('somethin went wrong')
    }
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <input type="password" ref={passwordConfirmRef} placeholder="Confirm" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
