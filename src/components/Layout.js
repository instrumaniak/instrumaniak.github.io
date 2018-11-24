import React, { Component, Fragment } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 650,
          padding: '0 1rem'
        }}>
          { this.props.children }
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
