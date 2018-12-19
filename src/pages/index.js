/**
 * Page: Home
 * Displays lists of recent blog posts
 */

import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

export default ({ data:{
  allMarkdownRemark:{
    totalCount,
    edges:posts
  }
}}) =>(
  <Layout>
    <p>Total posts: {totalCount}</p>
    { posts.map(({node:post}, id)=> {
        const { title, category, tags } = post.frontmatter
        const { slug, date } = post.fields

        return (
          <div key={id}>
            <h3><Link to={slug}>{title}</Link></h3>
            <p><small>{ date } &bull; {category} &bull; Tags: {tags.split(' ').join(', ')}</small></p>
            <p>{post.excerpt}</p>
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
      totalCount
      edges {
        node {
          frontmatter {
            title
            category
            tags
          }
          fields {
            slug
            date
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`
