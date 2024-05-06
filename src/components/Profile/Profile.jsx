import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileInfo}>{tag}</p>
        <p className={styles.profileInfo}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileListItem}>
          <span className={styles.statsInfo}>Followers</span>
          <span className={styles.statsInfo}>{stats.followers}</span>
        </li>
        <li className={styles.profileListItem}>
          <span className={styles.statsInfo}>Views</span>
          <span className={styles.statsInfo}>{stats.views}</span>
        </li>
        <li className={styles.profileListItem}>
          <span className={styles.statsInfo}>Likes</span>
          <span className={styles.statsInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
