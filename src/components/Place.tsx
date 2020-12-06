import { FC } from 'react'
import { Place } from '../model/place'
import styled from 'styled-components'

const BoxDiv = styled.div`
  padding: 12px 24px;
  border: 2px solid #ccc;
`
type Props = {
  place: Place
}

export const PlaceItem: FC<Props> = (props) => {
  return (
    <BoxDiv style={{ margin: '5px' }}>
      <div>{ props.place.name }</div>
      <div>{ props.place.address}</div>
      { props.place.url &&
        <a href={props.place.url}>Website</a>
      }
    </BoxDiv>
  )
}
