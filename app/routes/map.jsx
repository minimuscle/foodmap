import { Link, useLoaderData } from '@remix-run/react'
import MapComponent from '~/components/MapComponent'

export default function map() {
  const api = useLoaderData()
  return (
    <div>
      <h1>Map</h1>
      <MapComponent api={api} />
    </div>
  )
}

export function loader() {
  const api = process.env.MAPS_API
  return api
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <Link to='/'>Go Back</Link>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
