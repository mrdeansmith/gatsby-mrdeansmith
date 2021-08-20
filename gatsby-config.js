module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mrdeansmith",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Ay5u71y-H_VGqq4e2jrre5jS5hCoEs8Zg10GlL40wO8",
        spaceId: "5h866u68t448",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
  ],
};
