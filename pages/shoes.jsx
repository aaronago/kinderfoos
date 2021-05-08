import { gql } from '@apollo/client'
import client from '@lib/graphql/apollo-client'
import Page from '@components/page'

import ShoesGrid from '@components/shoes/shoes-grid'
import Header from '@components/header'

import Layout from '@components/layout'

export default function ExpoPage({ shoes }) {
  console.log(shoes)
  const meta = {
    title: 'Kinder Foos - Vegan Hiking Boots',
    description: 'All the best shoes with NO animal products.',
  }

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Vegan Hiking Boots" description={meta.description} />
        <ShoesGrid shoes={shoes} />
      </Layout>
    </Page>
  )
}

const query = gql`
  {
    shoes {
      nodes {
        title
        slug
        databaseId
        acf {
          brand {
            ... on Brand {
              title
              slug
              databaseId
            }
          }
          gender
          price
          excerpt
        }
        categories {
          nodes {
            databaseId
            name
          }
        }
        featuredImage {
          node {
            sourceUrl(size: FASTEST_TRENDING_POSTS_LARGE)
          }
        }
      }
    }
  }
`

export async function getStaticProps() {
  const { data } = await client.query({ query })

  return { props: { shoes: data.shoes.nodes } }
}
