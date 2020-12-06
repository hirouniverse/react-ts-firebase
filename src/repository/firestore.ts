import { firestore } from '../lib/firebase'
import firebase from 'firebase/app'

export class FirestoreRepository {
  constructor(readonly db: firebase.firestore.Firestore = firestore) {}

  get placesRef() {
    return this.db.collection('places')
  }
}
