// Use SpeakersSection component for about page
// remove explicit width on contact textarea for rows
import Link from 'next/link'
import Page from '@components/page'
import Image from 'next/image'
import styles from '@components/speaker-section.module.css'
import Layout from '@components/layout'
import { gql } from '@apollo/client'
import client from '@lib/graphql/apollo-client'
// type Props = {
//   speaker: Speaker
// }

export default function AboutPage({ images }) {
  const meta = {
    title: 'About Kinder Foos Vegan Footwear',
    description:
      'We made this site to help people find the best footwear for their feet and for the animals.',
  }

  return (
    <Page meta={meta}>
      <Layout>
        <AbootContoot images={images} />
      </Layout>
    </Page>
  )
}

function AbootContoot({ images }) {
  return (
    <>
      <Link href="/shoes">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Vegan Shoes
        </a>
      </Link>
      <div className={styles.container}>
        <div style={{ minWidth: '300px' }}>
          <Image
            alt={images[0].altText}
            title={images[0].title}
            src={images[0].sourceUrl}
            className={styles.image}
            loading="lazy"
            height={400}
            width={300}
          />
        </div>
        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>👣 Kinder Foos 🐮 🐑</h1>
          </div>
        </div>
      </div>
    </>
  )
}

const query = gql`
  {
    mediaItems(where: { search: "cow" }) {
      nodes {
        altText
        sourceUrl(size: MEDIUM_LARGE)
        title
      }
    }
  }
`

export async function getStaticProps() {
  const { data } = await client.query({ query })
  return { props: { images: data.mediaItems.nodes } }
}
