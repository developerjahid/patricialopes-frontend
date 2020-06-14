//dot env to hide keys
require('dotenv').config({
    path: `.env`,
})

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
    siteMetadata: {
        title: `Patricia Lopes`,
        description: `Gatsby starter styled with Tailwind by developjahid //seo description here...`,
        author: `@developerjahid`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal['400'],
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,

        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.PROJECT_ID,
                dataset: process.env.DATASET,
            },
        },
        `gatsby-source-sanity-transform-images`,
        `gatsby-plugin-offline`,
    ],
}
