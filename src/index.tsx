import * as React from 'react'
import styles from './styles.module.less'

interface Props {
  title: string
  subtitle: string
  image: string
  author: string
  profilePicture: string
  datePosted: Date
  socialLinks: string[]
}

export const ArticlePreview = ({}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.info}></div>
    </div>
  )
}
