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
          <div key={id}>
            <h3><Link to={slug}>{title}</Link></h3>
            <p><small>{ date } &bull; {category} &bull; Tags: {tags.split(' ').join(', ')}</small></p>
            <p className='blurb blurb--page'>{ blurb }</p>
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
