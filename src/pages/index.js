import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({ data:{allMarkdownRemark:{edges:pages}}}) =>(
  <Layout>
    { pages.map(({node:page}, id)=>(
        <div>
          <h3>{page.frontmatter.title}</h3>
          <p>{page.id}</p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
