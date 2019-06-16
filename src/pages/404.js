import React from 'react'
import { Link } from 'gatsby'

const Page404 = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <h1>404</h1>
    <p>Page not found. Return to <Link to='/'>Home</Link>.</p>
  </div>
)

export default Page404
