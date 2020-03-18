import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"
import fetch from "isomorphic-fetch"

const uri = "http://localhost:5000/graphql"

const error = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )

    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = createHttpLink({
    uri,
})

const authLink = setContext((_, { headers }) => {
    const token = null
    return {
        headers: {
            ...headers,
            authorization: token,
        },
    }
})

export const client = new ApolloClient({
    fetch,
    error,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => {

    return <ApolloProvider client={client}>{element}</ApolloProvider>
}
