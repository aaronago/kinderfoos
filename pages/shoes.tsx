import { GetStaticProps } from 'next'

import Page from '@components/page'
import ShoesGrid from '@components/shoes/shoes-grid'
import Header from '@components/header'
import Layout from '@components/layout'

import { getAllSponsors } from '@lib/cms-api'
import { Sponsor } from '@lib/types'

type Props = {
  sponsors: Sponsor[]
}

export default function ExpoPage({ sponsors }: Props) {
  const meta = {
    title: 'Kinder Foos - Vegan Hiking Boots',
    description: 'All the best shoes with NO animal products.',
  }

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Vegan Hiking Boots" description={meta.description} />
        <ShoesGrid shoes={sponsors} />
      </Layout>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsors = await getAllSponsors()

  return {
    props: {
      sponsors,
    },
    revalidate: 60,
  }
}
