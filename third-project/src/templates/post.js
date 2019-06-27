import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default ({
  data: {
    mdx: {
      frontmatter: { title },
      code: { body: content },
    },
  },
}) => (
  <Layout>
    <p>
      <Link to={"/blog/"}>&lt; Back to all posts</Link>
    </p>
    <h1>{title}</h1>
    <MDXRenderer>{content}</MDXRenderer>
  </Layout>
)
