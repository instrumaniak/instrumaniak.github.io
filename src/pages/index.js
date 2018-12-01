import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({ data:{
  allMarkdownRemark:{
    totalCount,
    edges:posts
  }
}}) =>(
  <Layout>
    <p>Total posts: {totalCount}</p>
    { posts.map(({node:post}, id)=>(
        <div key={id}>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.excerpt}</p>
          <p>Category: {post.frontmatter.category} Tags: {post.frontmatter.tags.split(' ').join(', ')}</p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "post"}}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            category
            tags
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`
