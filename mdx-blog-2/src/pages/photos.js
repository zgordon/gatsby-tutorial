import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    query Image {
      imageThumbs: allImageSharp {
        nodes {
          id
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imagesFull: allImageSharp {
        nodes {
          id
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image: file(
        relativePath: { eq: "david-bruyndonckx-iUv_1Zn4Dy0-unsplash.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(
            width: 400
            duotone: { highlight: "#ffffff", shadow: "#222222" }
          ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const thumbs = data.imageThumbs.nodes
  // const full = data.imagesFull.nodes

  return (
    <Layout>
      <SEO title="My Photos" />
      <h1>Hello world!</h1>
      <Img
        fixed={data.image.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
        style={{ float: "right" }}
      />

      <div className="gallery">
        {thumbs.map(image => (
          <Img key={image.id} fixed={image.fixed} />
        ))}
      </div>

      <p>
        Read more <Link to={"/about"}>about me</Link>.
      </p>
    </Layout>
  )
}
