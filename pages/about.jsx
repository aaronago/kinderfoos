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
            <p className={styles.title}>Compassionate footwear for compassionate feet.</p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p className={styles.bio}>
              Welcome to kinder foos. In 2015 the Youtube algorith decided to feed me Gary
              Yourofsky's infamous "Best Speech Ever" video and I decided to watch it. Forty five
              minutes later I was vegan and to this day it remains one of the best decisions I've
              ever made.
            </p>
            <p></p>
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
        <h3 className={styles['socials-header']}>The Shoes on Kinder Foos</h3>
        <p>
          The bare minimum requirement that every shoe listed on this site has to meet is: no animal
          products listed as materials. If you ever see a shoe on this site that doesn't live up to
          this standard please, please <Link href="/contact">contact us </Link>right away and it
          will be removed.
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
