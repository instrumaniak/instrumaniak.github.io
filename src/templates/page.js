/**
 * Template for pages that are in markdown
 */

import React, { Fragment} from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default ({ data: {
  markdownRemark: page,
  site: { siteMetadata }
}}) => (
  <Fragment>
    <Helmet>
      <title>{`${page.frontmatter.title} | ${siteMetadata.title}`}</title>
      <meta name='description' content={page.excerpt} />
    </Helmet>
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.html}}></div>
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
    markdownRemark(fields: {slug: {eq: $slug }}) {
      excerpt(pruneLength: 200)
      html
      frontmatter {
        title
      }
    }
  }
`
