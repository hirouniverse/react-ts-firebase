import { FC, useState, useEffect } from 'react'
import { PlaceRepository } from '../repository/place'
import { Place } from '../model/place'
import { PlaceItem } from './Place'

export const PlacesList: FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  const repo = new PlaceRepository();

  useEffect(() => {
    repo.getAll().then(places => {
      setPlaces(places)
    })
  }, [])

  return places.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <>
      {places.map(place => {
        return (
          <PlaceItem place={ place } />  
        )
      })}
    </>
  )
}
