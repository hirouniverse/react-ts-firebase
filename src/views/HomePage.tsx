import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../routes'
export const HomePage: FC = () => {
  return (
    <>
      <h1>This is home page</h1>
      <div>introduce your web site.</div>
      <ul>
        <li><Link to={Routes.signin}>Go to Signin Page</Link></li>
      </ul>
    </>
  )
}
