import React from "react";
import { Link } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";

export default () => (
  <Layout>
    <SEO />
    <h1>Hello world!</h1>
    <img src="Gatsby-Logo.svg" width="200" alt="Gatsby Logo" />
    <p>
      Read more <Link to={"/about"}>about me</Link>.
    </p>
  </Layout>
);
