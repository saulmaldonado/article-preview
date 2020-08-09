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

export const ArticlePreview = ({ title }: Props) => {
  return <div className={styles.test}>Example Component: {title}</div>
}
