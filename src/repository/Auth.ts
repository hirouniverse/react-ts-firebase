import firebase from 'firebase'
import { auth } from '../lib/firebase'

export const signin = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const signout = (cb: () => void) => {
  auth.signOut().then(() => {
    cb();
  })
}

export const signup = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  return auth.createUserWithEmailAndPassword(email, password)
}
