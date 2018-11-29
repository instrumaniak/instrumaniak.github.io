module.exports = {
  siteMetadata: {
    title: 'instrumaniak',
    description: 'A blog & personal site of Raziur Rahman',
    site_build_date: `${new Date().toDateString()}`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-sass'
  ]
}
