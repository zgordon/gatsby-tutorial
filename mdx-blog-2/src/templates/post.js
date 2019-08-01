import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default ({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <p>
      <Link to={"/blog/"}>&lt; Back to all posts</Link>
    </p>
    <h1>{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)
