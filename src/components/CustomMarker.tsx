import { FC } from 'react'
import { Marker } from 'react-map-gl'
import styled from 'styled-components'
import { Place } from '../model/place'

interface IProps {
  place: Place
  onClick: () => void
}

const MarkerContainer = styled.div`
  width:0;
  height:0;
`

type TProps = {
  backgroundColor: string
}
const MarkerComp = styled.span<TProps>`
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  width: 15px;
  height: 15px;
  color:#fff;
  background: #4D2D73;
  border:solid 2px;
  border-radius: 0 70% 70%;
  box-shadow:0 0 2px #000;
  cursor: pointer;
  transform-origin:0 0;
  transform: rotateZ(-135deg);
  background-color: ${props => props.backgroundColor};
`

export const CustomMarker: FC<IProps> = (props) => {
  return(
    <Marker
      latitude={props.place.latitude}
      longitude={props.place.longitude}
    >
      <MarkerContainer onClick={() => props.onClick()}>
        <MarkerComp backgroundColor="gold" />
      </MarkerContainer>
    </Marker>
  )
}
