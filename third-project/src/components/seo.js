import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import useSiteMetadata from "../hooks/use-sitemetadata";

function SEO({ description, lang, title }) {
  const site = useSiteMetadata();
  const seo = {
    title: title || site.title,
    description: description || site.description
  };
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={site.titleTemplate}
    >
      <meta name="description" content={seo.description} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  );
}

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
SEO.defaultProps = {
  lang: `en`,
  title: null,
  description: null
};
