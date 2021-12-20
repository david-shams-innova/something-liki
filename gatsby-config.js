module.exports = {
    siteMetadata: {
      siteUrl: "https://www.yourdomain.tld",
      title: "My Gatsby Site",
    },
    plugins: [
      // {
      //   resolve: `gatsby-plugin-theme-ui`,
      //   options: {
      //     preset: "@theme-ui/preset-funk",
      //   },
      // },
      {
        resolve: "gatsby-source-contentful",
        options: {
          // accessToken: "p_axUDVfhuCxXJH33_JzZxT98vjH5fg2ZvC7UbRYt1I",
          // accessToken: "mDhmzEGqrDnWXgyxuBT4YHGdztzU_iiMTCD5RTKh3ro",
          accessToken: "lsKYPi0W-WgFoCiZQXOg7o93WivmcUBvaKfVKvw1Ogw",
          spaceId: "jw7dug3ulqr7",
        },
      },
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-image",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
    ],
  };
  