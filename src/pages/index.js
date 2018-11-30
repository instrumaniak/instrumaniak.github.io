import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({ data:{
  allMarkdownRemark:{
    totalCount,
    edges:pages
  }
}}) =>(
  <Layout>
    <p>Total posts: {totalCount}</p>
    { pages.map(({node:page}, id)=>(
        <div>
          <h3>{page.frontmatter.title}</h3>
          <p>{page.excerpt}</p>
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
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`
