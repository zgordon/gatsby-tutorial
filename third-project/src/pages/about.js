import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="About This Site" />
      <h1>About Me!</h1>
      <p>
        Go back <Link to={"/"}>home</Link>.
      </p>
    </Layout>
  );
};
