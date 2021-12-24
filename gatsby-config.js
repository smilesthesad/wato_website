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
        icon: "src/images/WATOLogoSmall.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
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
