import Page from '@components/page'
import ShoesGrid from '@components/shoes/shoes-grid'
import Header from '@components/header'
import Layout from '@components/layout'
import mockShoes from '@components/shoes/mock-shoes'

export default function ExpoPage() {
  const meta = {
    title: 'Kinder Foos - Vegan Hiking Boots',
    description: 'All the best shoes with NO animal products.',
  }

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Vegan Hiking Boots" description={meta.description} />
        <ShoesGrid shoes={mockShoes} />
      </Layout>
    </Page>
  )
}
