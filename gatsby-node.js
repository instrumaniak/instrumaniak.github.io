const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages'})
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

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

          //Pages: /page
          if(node.frontmatter.layout == 'page') {
            createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/page.js'),
              context: {
                slug: node.fields.slug
              }
            })
          }

          //Blog posts: /blog/post
          if(node.frontmatter.layout == 'post') {
            //extract date and post slug from file slug
            let full_slug = node.fields.slug.split('-')
            let date = full_slug.slice(0, 3).join('-')
            let post_slug = full_slug.slice(3).join('-')

            createPage({
              path: `/blog/${post_slug}`,
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
