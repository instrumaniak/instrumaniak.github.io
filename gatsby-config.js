module.exports = {
  siteMetadata: {
    title: 'instrumaniak',
    description: 'A blog & personal site of Raziur Rahman',
    author: 'Raziur Rahman',
    site_build_date: `${new Date().toDateString()}`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet'
  ]
}
