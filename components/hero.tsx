import cn from 'classnames'
import styleUtils from './utils.module.css'
import styles from './hero.module.css'
import { SITE_DESCRIPTION } from '@lib/constants'

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        Be Kind to Animals
        <br className={styleUtils['show-on-desktop']} /> and to Your Feet
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>Compassion</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Sustainability</strong>
        </p>
      </div>
    </div>
  )
}
