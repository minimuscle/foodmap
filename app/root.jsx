const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require('@remix-run/react')

import styles from './app.css'

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'FoodMap | Food-Based Reviews',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
