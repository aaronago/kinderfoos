import Link from 'next/link'
import Page from '@components/page'
import Image from 'next/image'
import styles from '@components/speaker-section.module.css'
import Layout from '@components/layout'
import { gql } from '@apollo/client'
import client from '@lib/graphql/apollo-client'
import GithubIcon from '@components/icons/icon-github'
import TwitterIcon from '@components/icons/icon-twitter'

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
            <h1 className={styles.name}>👣 Kinder Foos 🐮 </h1>
            <p className={styles.title}>
              Vegan footwear & <span className={styles.company}>reviews</span>
            </p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p className={styles.bio}>
              Morbi sit amet ullamcorper dolor, laoreet egestas sem. In enim ligula, dapibus a
              venenatis at, commodo vitae dui. Etiam nec laoreet leo. Cras a turpis massa. Integer
              imperdiet, magna aliquet accumsan congue, enim sem elementum quam, vitae gravida orci
              tortor in nulla. In ut mi ac enim elementum vehicula nec sed ante. Proin quis pharetra
              massa.
            </p>
            <h3 className={styles['socials-header']}>Social Media</h3>
            <a aria-label="Twitter" href="twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon color="#D8D8D8" size={24} />
            </a>
            <a
              aria-label="GitHub"
              className={styles.githubIcon}
              href="https://github.com/aaronago/kinderfoos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon color="#D8D8D8" size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles['talk-details']}>
        <h3 className={styles['socials-header']}>Affiliate Disclaimer</h3>
        <p>
          {' '}
          Morbi sit amet ullamcorper dolor, laoreet egestas sem. In enim ligula, dapibus a venenatis
          at, commodo vitae dui. Etiam nec laoreet leo. Cras a turpis massa. Integer imperdiet,
          magna aliquet accumsan congue, enim sem elementum quam, vitae gravida orci tortor in
          nulla. In ut mi ac enim elementum vehicula nec sed ante. Proin quis pharetra massa.
        </p>
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
