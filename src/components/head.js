import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const meta = data.site.siteMetadata;
  return (
    <Helmet
      title={title || meta.title}
      defaultTitle={meta.title}
      meta={[
        { name: 'description', content: description || meta.description },
        { property: 'og:title', content: title || meta.title },
        { property: 'og:description', content: description || meta.description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
      ]}
    />
  );
};

export default Head;
