import Page from '@components/page'
import Header from '@components/header'
import Layout from '@components/layout'
import Form from '@components/form'

const ContactPage = () => {
  const meta = {
    title: 'Get in Touch',
    description:
      'This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.',
  }

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Get in Touch" description={meta.description} />
        <Form />
      </Layout>
    </Page>
  )
}

export default ContactPage
