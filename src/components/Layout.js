import React, { Component, Fragment } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <div style={{
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <NavBar />
        <div style={{
          padding: '0 1rem'
        }}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
