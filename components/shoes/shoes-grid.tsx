import Image from 'next/image'
import cn from 'classnames'
import { Shoe } from '@lib/types'
import styles from './shoes-grid.module.css'

function ShoeCard({ shoe }: { shoe: Shoe }) {
  const urls = shoe.shoeACF.retailers.map(retailer => {
    const base = retailer.retailerACF.searchUrl

    return `${base}${shoe.title}`
  })

  return (
    <a
      href={urls[0]}
      target="_blank"
      rel="noreferrer noopener"
      tabIndex={0}
      className={cn(styles.card, styles.gold)}
    >
      <div className={styles.imageWrapper}>
        <Image
          alt={shoe.featuredImage.node.altText || shoe.title}
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
          <p className={styles.brand}>{shoe.shoeACF.brand[0].title}</p>
          <p className={styles.description}>{shoe.shoeACF.excerpt}</p>
        </div>
      </div>
    </a>
  )
}

type Props = {
  shoes: Shoe[]
}

export default function ShoesGrid({ shoes }: Props) {
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
