import { FC } from 'react'
import styled from 'styled-components'
import { Place } from '../model/place'

type TProps = {
  draw: boolean
}
const Drawer = styled.div<TProps>`
  width: 100vw;
  height: 20vh;
  transition: all 0.2s;
  transform: ${props => props.draw ? 'translateY(0)' : 'translateY(20vh)'};
  position: fixed;
  left: 0;
  bottom: 10vh;
  z-index: 100;
  background-color: #cccccc;
`

interface IProps {
  draw: boolean,
  place: Place | undefined
}
export const CustomDrawer: FC<IProps> = (props) => {

  return (
    <Drawer draw={props.draw}>
      {
        props.place && (
          <>
            <p>{ props.place.name }</p>
            <p>{ props.place.address }</p>
          </>
        )
      }
    </Drawer>
  )
}
