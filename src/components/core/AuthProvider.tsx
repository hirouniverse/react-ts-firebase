import { FC, createContext } from 'react'
import { Auth, fakeAuth, useAuthProvider } from '../../hooks/useAuthProvider'

export const AuthContext = createContext<Auth>(fakeAuth);

export const AuthProvider: FC = ({ children }) => {
  const auth = useAuthProvider()
  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  );
}

// export function AuthProvider({ children }: PropsWithChildren<{}>) {
//   return (
//     <>
//       { children }
//     </>
//   )
// }