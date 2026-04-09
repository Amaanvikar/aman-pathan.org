module.exports = {
  siteMetadata: {
    title: 'Aman Pathan',
    description:
      'Aman Pathan is a Full-Stack & Mobile Developer based in Bangalore, India, who specialises in building exceptional digital experiences.',
    siteUrl: 'https://Amaanvikar.github.io',
    image: '/og.png',
    twitterUsername: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aman Pathan',
        short_name: 'AP',
        start_url: '/',
        background_color: '#0a192f',
        theme_color: '#0a192f',
        display: 'minimal-ui',
        icon: 'src/images/profile.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: `${__dirname}/src/images` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'content', path: `${__dirname}/content/` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-external-links', options: { target: '_blank', rel: 'nofollow noopener noreferrer' } },
          'gatsby-remark-images',
          { resolve: 'gatsby-remark-prismjs', options: { classPrefix: 'language-' } },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: { host: 'https://Amaanvikar.github.io', sitemap: 'https://Amaanvikar.github.io/sitemap.xml', policy: [{ userAgent: '*', allow: '/' }] },
    },
  ],
};
