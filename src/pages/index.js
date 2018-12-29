/**
 * Page: Home
 * Displays lists of recent blog posts
 */

import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

export default ({ data:{
  allMarkdownRemark:{
    edges:posts
  }
}}) =>(
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
)

export const query = graphql`
  query {
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
