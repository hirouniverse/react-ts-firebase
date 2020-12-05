import { FC } from 'react'
import { useParams } from 'react-router-dom'

type RouterParam = {
  selectedRoute: string
}

export const DynamicPage: FC = () => {
  const { selectedRoute } = useParams<RouterParam>();

  return (
    <>
      <h5>{ selectedRoute }</h5>
    </>
  )
}
