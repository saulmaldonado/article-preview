import * as React from 'react'
import styles from './styles.module.less'
// import { ReactComponent as Facebook } from './images/icon-facebook.svg'
import { ReactComponent as Share } from './images/icon-share.svg'

interface Props {
  title: string
  subtitle: string
  image: string
  author: string
  profilePicture: string
  datePosted: Date
  socialLinks: string[]
}

export const ArticlePreview = ({
  title,
  image,
  subtitle,
  profilePicture,
  author,
  datePosted,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={`${title}-image`} />
      </div>
      <div className={styles.info}>
        <header className={styles.title}>{title}</header>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.author}>
          <img src={profilePicture} alt={`${author}-profile-picture`} />
          <div className={styles.dataContainer}>
            <p className={styles.name}>{author}</p>
            <p className={styles.date}>{datePosted.toDateString()}</p>
          </div>
          <div className={styles.share}>
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}
