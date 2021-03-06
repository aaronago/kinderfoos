import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://srp.kao.mybluehost.me/graphql',
  cache: new InMemoryCache(),
})

export default client
