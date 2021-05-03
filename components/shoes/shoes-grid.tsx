import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { Shoe } from '@lib/types'
import styles from './shoes-grid.module.css'

function SponsorCard({ shoe }: { shoe: Shoe }) {
  return (
    <Link key={shoe.name} href={`/expo/${shoe.slug}`}>
      <a role="button" tabIndex={0} className={cn(styles.card, styles.gold)}>
        <div className={styles.imageWrapper}>
          <Image
            alt={shoe.name}
            src={shoe.cardImage.url}
            className={cn(styles.image)}
            loading="lazy"
            title={shoe.name}
            width={900}
            height={500}
          />
        </div>

        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{shoe.name}</h2>
            <p className={styles.brand}>{shoe.brand.name}</p>
            <p className={styles.description}>{shoe.description}</p>
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
  const silverShoes = shoes.filter(s => s.tier === 'silver')
  const otherShoes = shoes.filter(s => s.tier !== 'silver')

  return (
    <>
      <div className={styles.grid}>
        {otherShoes.map(shoe => (
          <SponsorCard key={shoe.name} shoe={shoe} />
        ))}
      </div>
      <div className={styles.grid}>
        {silverShoes.map(shoe => (
          <SponsorCard key={shoe.name} shoe={shoe} />
        ))}
      </div>
    </>
  )
}
