import gql from "graphql-tag"

export const GET_AUTHOR = gql`
  query {
    getAuthor {
      name
      email
      phone
      age
      country
    }
  }
`
