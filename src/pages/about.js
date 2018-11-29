/**
 *  About Page
 */

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class extends Component {
  render() {
    const {
      site: {
        siteMetadata: { title, description }
      }
    } = this.props.data

    return (
      <Layout>
        <h1>About {title}</h1>
        <p>{description}</p>

      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
