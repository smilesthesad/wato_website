module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "wato_web",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src/styles"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/src/images/`,
    //   },
    //   __key: "images",
    // },
  ],
};
