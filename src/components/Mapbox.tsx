import { FC, useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'

import { BottomMenu } from './BottomMenu'
import { CustomDrawer } from './Drawer'
import { CustomMarkerList } from './CustomMarkerList'

import { PlaceRepository } from '../repository/place'
import { Place } from '../model/place'

const mapStyle = {
  width: '100%',
  height: '90vh'
}

const mapBoxApiKey = process.env.REACT_APP_MAPBOX_ACCESS_KEY

type TViewport = {
  latitude: number
  longitude: number
  zoom: number
}

export const Mapbox: FC = () => {
  const [viewport, setViewport] = useState<TViewport>({
    latitude: 10.80195210767148,
    longitude: 106.73972154270963,
    zoom: 15
  })


  const [drawer, setDrawer] = useState<boolean>(false)

  const [places, setPlaces] = useState<Place[]>([])


  useEffect(() => {
    (async () => {
      const repo = new PlaceRepository()
      const places = await repo.getAll()
      if (places.length !== 0) {
        setPlaces(places)
      }
    })()
    return
  }, [])


  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(undefined)

  function handleClick(place: Place) {
    setDrawer(true)
    setSelectedPlace(place)
  }

  return (
    <>
      <ReactMapGL
        mapboxApiAccessToken={mapBoxApiKey}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        {...mapStyle}
        maxZoom={15}
        minZoom={14}
        onClick={() => setDrawer(false)}
        onViewportChange={(value) => setViewport({...value})}
      >
        {
          places.length !== 0 ? (
            <CustomMarkerList places={places} handleClick={ handleClick }/>
          ): null
        }
      </ReactMapGL>
      <BottomMenu style={{ textAlign: 'center' }}>Menu</BottomMenu>
      <CustomDrawer draw={drawer} place={selectedPlace} />
    </>
  )
}
