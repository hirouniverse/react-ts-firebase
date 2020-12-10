import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'
import firebase from 'firebase'

import { auth } from '../lib/firebase'

import { User, Me } from '../model/user'

type TAuth = {
  loading: boolean
  user?: User
}

const convertUser = (user: firebase.User): User => {
  return new Me(user.uid)
}

const _useAuth = (): TAuth => {

  const [authState, setAuth] = useState<TAuth>({ loading: true })

  useEffect(() => {
    let cancel = false

    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        if (cancel) return
        if (user) {
          setAuth({ loading: false, user: convertUser(user)})
          return
        }

        try {
          const credential = await auth.signInAnonymously()
          if (credential.user) {
            setAuth({ loading: false, user: convertUser(credential.user) })
            return
          }
          setAuth({ loading: false })
        } catch(error) {
          console.error(error)
          setAuth({ loading: false })
        }
      },
      error => {
        if(cancel) return
        console.error(error)
        setAuth({ loading: false })
      }
    );
    return () => {
      cancel = true
      unsubscribe()
    }
  }, [])

  return authState
}

export const AuthContext = createContext<TAuth>({ loading: true });

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const state = _useAuth();
  return (
    <AuthContext.Provider value={ state }>
      { !state.loading && children }
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext)
}
