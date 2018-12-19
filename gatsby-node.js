const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { getPostData } = require('./src/utils')

// Insert field data on markdown nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark') {
    const { layout } = node.frontmatter
    const slug = createFilePath({ node, getNode, basePath: 'pages'})

    // Insert only slug field for pages
    if(layout == "page") {
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
    }

    if(layout == "post") {
      const { postSlug, postDate, rawDate } = getPostData(slug)

      // Insert slug & date into fields for blog posts
      createNodeField({
        node,
        name: 'slug',
        value: postSlug
      })
      createNodeField({
        node,
        name: 'date',
        value: postDate
      })
      createNodeField({
        node,
        name: 'rawDate',
        value: rawDate
      })
    }
  }
}


// Create pages from markdown files for both pages & blog posts
exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                layout
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node}) => {
          // Use different template for pages & posts

          // Pages: /:page
          if(node.frontmatter.layout == 'page') {
            createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/page.js'),
              context: {
                slug: node.fields.slug
              }
            })
          }

          // Blog posts: /blog/:post
          if(node.frontmatter.layout == 'post') {
            createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/blog-post.js'),
              context: {
                slug: node.fields.slug
              }
            })
          }

        })
      resolve()
    })
  })
}
