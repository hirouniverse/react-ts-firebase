import { FC } from 'react'
import { Place } from '../model/place'
import { CustomMarker } from './CustomMarker'

interface IProps {
  places: Place[],
  handleClick: (place: Place) => void
}

export const CustomMarkerList: FC<IProps> = (props) => {
  return (
    <>
    {
      props.places.map(place => {
        return (
          <CustomMarker
            key={place.id}
            place={place}
            onClick={() => props.handleClick(place)} />
        )
      })
    }
    </>
  )
}