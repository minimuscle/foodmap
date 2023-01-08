import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useRef, useEffect } from 'react'

const Map = (api) => (
  <Wrapper apiKey={api.toString()} render={render}>
    <MyMapComponent />
  </Wrapper>
)

const render = (status) => {
  switch (status) {
    case Status.SUCCESS:
      return <MyMapComponent />
  }
}

function MyMapComponent(center, zoom) {
  const ref = useRef()
  useEffect(() => {
    const center = { lat: -34.397, lng: 150.644 }
    const zoom = 4
    new window.google.maps.Map(ref.current, { center, zoom })
  })

  return <div ref={ref} id='map' />
}

export default function MapComponent(props) {
  return (
    <div>
      <h1>Component</h1>

      <Map api={props.api} />
    </div>
  )
}
