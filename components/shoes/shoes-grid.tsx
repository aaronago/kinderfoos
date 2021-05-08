import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { Shoe } from '@lib/types'
import styles from './shoes-grid.module.css'

function ShoeCard({ shoe }: { shoe: Shoe }) {
  return (
    <Link key={shoe.title} href={`/expo/${shoe.slug}`}>
      <a role="button" tabIndex={0} className={cn(styles.card, styles.gold)}>
        <div className={styles.imageWrapper}>
          <Image
            alt={shoe.title}
            src={shoe.featuredImage.node.sourceUrl}
            className={cn(styles.image)}
            loading="lazy"
            title={shoe.title}
            width={900}
            height={500}
          />
        </div>

        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{shoe.title}</h2>
            <p className={styles.brand}>{shoe.acf.brand[0].title}</p>
            <p className={styles.description}>{shoe.acf.excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

type Props = {
  shoes: Shoe[]
}

export default function SponsorsGrid({ shoes }: Props) {
  return (
    <>
      <div className={styles.grid}>
        {shoes.map(shoe => (
          <ShoeCard key={shoe.databaseId} shoe={shoe} />
        ))}
      </div>
    </>
  )
}
