import React, { useState } from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { useQuery } from "@apollo/react-hooks"
import { GET_AUTHOR } from "../graphql/queries"
import Layout from "../components/layout"
import SEO from "../components/seo"



export default ({ data: { antonImage } }) => {

  const [author, setAuthor] = useState(null);

  useQuery(GET_AUTHOR, {
    onError: (err) => console.log(err),
    onCompleted: ({ getAuthor }) => setAuthor(getAuthor)
  })

  return (
    <Layout>
      <SEO title="Home" />

      <h1>Hi people</h1>
      <p>Welcome to the Gatsby , Express , GraphQl , Starter</p>
      {author &&
        <>
          <p><u>Author:</u> {author.name}</p>
          <Img style={{ width: 300, marginBottom: 30 }} fluid={antonImage.childImageSharp.fluid} />
          <p><u>email:</u> {author.email}</p>
          <p><u>phone:</u> {author.phone}</p>
          <p>age: {author.age}</p>
          <p>country: {author.country}</p>
        </>
      }

    </Layout>
  )
}



export const indexPageDataQuery = graphql`
  query indexPageDataQuery{
    antonImage: file(relativePath: { eq: "anton.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`
