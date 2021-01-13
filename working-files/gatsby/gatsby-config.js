// Documentation:
//     https://www.gatsbyjs.com/docs/gatsby-config/

import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      // projectId taken from manage.sanity.io
      options: {
        projectId: 'cstxibs8',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
  ]
};
