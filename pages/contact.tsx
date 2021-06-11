import Page from '@components/page'
import Header from '@components/header'
import Layout from '@components/layout'
import Form from '@components/contact/form'

const ContactPage = () => {
  const meta = {
    title: 'Get in Touch',
    description:
      'Thanks for contacting Kinder Foos. Our number one mission is to help people find cruelty free footwear. If you would like to share anything with us that would further that mission we would be very grateful. 🕊',
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
