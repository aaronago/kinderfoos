import { gql } from '@apollo/client'
import client from '@lib/graphql/apollo-client'
import Page from '@components/page'
import Header from '@components/header'
import Layout from '@components/layout'

import ShoesGrid from '@components/shoes/shoes-grid'

export default function ExpoPage({ shoes }) {
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
    shoes(first: 100) {
      nodes {
        title
        slug
        databaseId
        categories {
          nodes {
            databaseId
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
        shoeACF {
          brand {
            ... on Brand {
              databaseId
              slug
              title
            }
          }
          excerpt
          gender
          price
          retailers {
            ... on Retailer {
              databaseId
              retailerACF {
                searchUrl
              }
            }
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
