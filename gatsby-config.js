module.exports = {
  siteMetadata: {
    title: `Karya TEP | Lembar Galeri Mahasiswa TEP 2020`,
    description: `Tempat Mahasiswa TEP UM 2020 menampilkan tugas dan karya unggulannya sebagai bentuk apresiasi diri. Kami terbuka untuk kolaborasi dan kontribusi karya`,
    author: `TEPers UM 2020`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "teknologi-pendidikan", // (REQUIRED, replace with your own)
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karya Mahasiswa TEP Universitas Negeri Malang`,
        short_name: `Karya TEP`,
        start_url: `/`,
        background_color: `#003E80`,
        theme_color: `#003E80`,
        display: `standalone`,
        icon: `src/images/icon-karya-tep.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
