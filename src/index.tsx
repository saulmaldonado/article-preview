import * as React from 'react';
import styles from './styles.module.less';
import Icons from './images/icons';
import SocialsIcon from './components/SocialsIcon';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  profilePicture: string;
  datePosted: Date;
  socialLinks: SocialLinks;
};

type SocialLinks = {
  twitter?: string;
  facebook?: string;
  pinterest?: string;
  facebookMessenger?: string;
  linkedin?: string;
  reddit?: string;
};

export const ArticlePreview = ({
  title,
  image,
  subtitle,
  profilePicture,
  author,
  datePosted,
  socialLinks,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={'article-image'} />
      </div>
      <div className={styles.info}>
        <header className={styles.title}>{title}</header>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.author}>
          <img src={profilePicture} alt={'author-profile-picture'} />
          <div className={styles.dataContainer}>
            <p className={styles.name}>{author}</p>
            <p className={styles.date}>{datePosted.toDateString()}</p>
          </div>
          <button className={styles.share}>
            <div className={styles.popup}>
              <span className={styles.popuptext}>SHARE</span>
              <div className={styles.icons}>
                {Object.keys(socialLinks).map((site, i) => {
                  return (
                    <SocialsIcon site={site} link={socialLinks[site]} key={i} />
                  );
                })}
              </div>
            </div>
            <Icons.Share className={styles.shareIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
