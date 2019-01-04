/**
 * Template for blog posts in markdown
 */

import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default ({ data: {
  markdownRemark: post,
  site: { siteMetadata }
}}) => (
  <Fragment>
    <Helmet>
      <title>{`${post.frontmatter.title} | ${siteMetadata.title} `}</title>
      <meta name='description' content={post.frontmatter.blurb} />
    </Helmet>
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.fields.date}</p>
      <p className='blurb blurb--post'><em>{post.frontmatter.blurb}</em></p>

      <div dangerouslySetInnerHTML={{__html:post.html}}></div>
    </Layout>
  </Fragment>
)

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        blurb
      }
      fields {
        date
      }
    }
  }
`
