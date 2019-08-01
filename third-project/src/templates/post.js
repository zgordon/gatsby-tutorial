import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import SEO from "components/seo";

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
      }
      code {
        body
      }
    }
  }
`;

export default ({
  data: {
    mdx: {
      frontmatter: { title, excerpt },
      code: { body: content }
    }
  }
}) => (
  <Layout>
    <SEO title={title} description={excerpt} />
    <p>
      <Link to={"/blog/"}>&lt; Back to all posts</Link>
    </p>
    <h1>{title}</h1>
    <MDXRenderer>{content}</MDXRenderer>
  </Layout>
);
