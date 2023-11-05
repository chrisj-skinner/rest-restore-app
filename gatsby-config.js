module.exports = {
  siteMetadata: {
    title: `rest-restore-app`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        // your cookiehub widget ID
        cookihubId: `c2ba516c`,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
};
