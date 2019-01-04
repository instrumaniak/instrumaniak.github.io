/**
 * Page: Home
 * Displays lists of recent blog posts
 */

import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data:{
  site: { siteMetadata },
  allMarkdownRemark:{
    edges:posts
  }
}}) =>(
  <Fragment>
    <Helmet>
      <title>{ siteMetadata.title }</title>
      <meta name='description' content={ siteMetadata.description } />
    </Helmet>
    <Layout>
      { posts.map(({node:post}, id)=> {
          const { title, category, tags, blurb } = post.frontmatter
          const { slug, date } = post.fields

          return (
            <div className='post-card' key={id}>
              <h2 className='post-card__title'>
                <Link className='post-card__title-link' to={slug}>
                  {title}
                </Link>
              </h2>
              <div className='post-card__info'>
                { date } &bull; {category} &bull; Tags: {tags.split(' ').join(', ')}
              </div>
              <div className='post-card__blurb'>{ blurb }</div>
            </div>
          )
        })
      }
    </Layout>
  </Fragment>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: {layout: {eq: "post"}} }
      sort: { order: DESC, fields: [fields___rawDate] }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            tags
            blurb
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`
