import { useState } from 'react'

export type Auth = {
  isAuthenticated: boolean
  signin: (cb: () => void) => void
  signout: (cb: () => void) => void
}

export const fakeAuth: Auth = {
  isAuthenticated: false,
  signin: (cb) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 1000); // fake async
  },
  signout: (cb) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 1000); // fake async
  }
}

export const useAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signin(cb: () => void) {
    fakeAuth.signin(() => {
      setIsAuthenticated(true);
      cb();
    })
  }

  function signout(cb: () => void) {
    fakeAuth.signout(() => {
      setIsAuthenticated(false);
      cb();
    })
  }

  return {
    isAuthenticated,
    signin,
    signout
  }
}
