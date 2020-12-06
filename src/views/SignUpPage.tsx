import { FC, useRef } from 'react'
import { signup } from '../repository/Auth'

export const SignUpPage: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (emailRef.current !== null && passwordRef.current !== null && passwordConfirmRef.current !== null) {
      signup(emailRef.current.value, passwordRef.current.value).then(user => {
        console.log(user)
      })
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" name="email" id="email" ref={ emailRef } />
        <input type="password" name="email" id="email" ref={ passwordRef } />
        <input type="password" name="email" id="email" ref={ passwordConfirmRef } />
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}
