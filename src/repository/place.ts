import { Place } from '../model/place'
import firebase from 'firebase/app'
import { FirestoreRepository } from './firestore'

export class PlaceRepository extends FirestoreRepository {
  decode(snapshot: firebase.firestore.DocumentSnapshot | firebase.firestore.QueryDocumentSnapshot): Place | undefined {
    const data = snapshot.data()
    if (!data) return
    return new Place(snapshot.id, data.name, data.address, data.url, data.latitude, data.longitude)
  }

  async getAll(): Promise<Place[]> {
    const result = await this.placesRef.limit(10).get()
    const places: Place[] = []

    result.forEach(snapshot => {
      const place = this.decode(snapshot)
      if (place) {
        places.push(place)
      }
    })
    return places
  }
}
