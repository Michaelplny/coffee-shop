module.exports = {
  siteMetadata: {
    title: 'The Coffee Blog'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resovle: 'gatsby-source-filesystem'
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    }
  ]
};
