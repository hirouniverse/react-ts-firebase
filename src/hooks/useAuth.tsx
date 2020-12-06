import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'
import firebase from 'firebase'

import { auth } from '../lib/firebase'

type TAuth = {
  loading: boolean
  user?: firebase.User
  signout?: () => void
}

const _useAuth = (): TAuth => {

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<firebase.User | undefined>(undefined)

  function signout() {
    auth.signOut().then(() => {
      setUser(undefined)
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        console.log('onAuthStateChange is called')
        if (user) {
          setUser(user)
          setLoading(false)
          return
        }
        setLoading(false)
      },
      error => {
        console.error(error)
        setLoading(false)
      }
    );
    return unsubscribe;
  }, [])

  return {
    loading,
    user,
    signout
  };
}


export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {

  const auth = _useAuth();

  return (
    <AuthContext.Provider value={ auth }>
      { !auth.loading && children }
    </AuthContext.Provider>
  );
}

export const AuthContext = createContext<TAuth>({ loading: true });

export const useAuth = () => useContext(AuthContext)
